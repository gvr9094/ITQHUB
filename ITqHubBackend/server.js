const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const crypto = require('crypto');
const dotenv = require('dotenv');
const { sendVerificationEmail } = require('./email.js');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL Database.');
});



// Register endpoint
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const verificationToken = crypto.randomBytes(32).toString('hex');

  if (!name || !email || !password) {
    return res.status(400).send('All fields are required.');
  }

  const checkUserSql = 'SELECT * FROM itqhub_uers WHERE email = ?';
  db.query(checkUserSql, [email], async (err, results) => {
    if (err) {
      console.error('Error executing query:', err.message);
      return res.status(500).send(`Server error: ${err.message}`);
    }

    if (results.length > 0) {
      return res.status(400).send('You are already a user. Please log in.');
    } else {
      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
          'INSERT INTO itqhub_uers (name, email, password, verification_token) VALUES (?, ?, ?, ?)',
          [name, email, hashedPassword, verificationToken],
          (err) => {
            if (err) {
              console.error('Error executing query:', err.message);
              return res.status(500).send('Registration error');
            }

            // Send a response to the user immediately
            res.send('Registration successful! Check your email to verify your account.');

            // Send verification email asynchronously
            const verificationLink = `http://itqhub.com/verify?token=${verificationToken}`;
            sendVerificationEmail(name, email, verificationLink)
              .then(() => {
                console.log('Verification email sent successfully.');
              })
              .catch(emailError => {
                console.error('Error sending email:', emailError.message);
              });
          }
        );
      } catch (hashError) {
        console.error('Error hashing password:', hashError.message);
        res.status(500).send('Registration error');
      }
    }
  });
});


app.get('/verify', (req, res) => {
  const token = req.query.token;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  // You might want to check for token expiry if applicable
  const verifyUserSql = `
    UPDATE itqhub_uers 
    SET is_verified = true 
    WHERE verification_token = ? AND verification_token IS NOT NULL
  `;
  
  db.query(verifyUserSql, [token], (err, results) => {
    if (err) {
      console.error('Error executing query:', err.message);
      return res.status(500).json({ message: 'Verification error' });
    }

    if (results.affectedRows === 0) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // Optionally, you can send an HTML email or redirect the user here
    res.status(200).json({message:'Email verification successful! You can now log in.'});
  });
});



// Login endpoint

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM itqhub_uers WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send(`Server error: ${err.message}`);
    }

    if (results.length === 0) {
      return res.status(400).send('You are a new user, please register.');
    }

    const user = results[0];

    // Check if the user is verified
    if (user.is_verified === 0) {
      // Send the response before sending the email
      res.status(403).send('Please verify your email before Login. A verification link has been sent to your email.');

      const verificationLink = `http://itqhub.com/verify?token=${user.verification_token}`;

      sendVerificationEmail(user.name, email, verificationLink)
        .then(() => {
          console.log('Verification email sent successfully.');
        })
        .catch(emailError => {
          console.error('Error sending email:', emailError.message);
        });

      // Stop further execution
      return;
    }

    // Proceed with password validation if verified
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // Login success
    res.status(200).send('Login successful');
  });
});


  

app.post('/forgot-password', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation (can be extended further)
  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide both email and password' });
  }

  // Query to check if the email exists in the database and if the user is verified
  const query = 'SELECT * FROM itqhub_uers WHERE email = ?';
  db.query(query, [email], async (err, result) => {
      if (err) {
          console.error('Error querying the database:', err);
          return res.status(500).send({ error: 'Internal server error' });
      }

      if (result.length > 0) {
          const user = result[0];
          res.status(403).send({ error: 'Please verify your email before resetting your password. An email sent to you succesfully' });
          // Check if the user is verified
          if (user.is_verified === 0) {
           
            const verificationLink = `http://itqhub.com/verify?token=${user.verification_token}`;
      
            sendVerificationEmail(user.name, email, verificationLink)
              .then(() => {
                console.log('Verification email sent successfully.');
              })
              .catch(emailError => {
                console.error('Error sending email:', emailError.message);
              });
      
            // Stop further execution
            return;
          }

          // If verified, hash the new password
          try {
              const hashedPassword = await bcrypt.hash(password, 10);

              // Update the user's password in the database
              const updateQuery = 'UPDATE itqhub_uers SET password = ? WHERE email = ?';
              db.query(updateQuery, [hashedPassword, email], (err) => {
                  if (err) {
                      console.error('Error updating the database:', err.message);
                      return res.status(500).send({ error: 'Error updating the password' });
                  }

                  res.json({ message: 'Password has been successfully updated' });
              });
          } catch (error) {
              console.error('Error hashing the password:', error);
              return res.status(500).send({ error: 'Error updating the password' });
          }
      } else {
          // Email does not exist in the database
          res.status(404).send({ error: 'Email not found. Please register.' });
      }
  });
});




// Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
  
//Replace server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
