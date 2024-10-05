const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
      publicPath: '/',
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,  // Apply this rule to JavaScript and JSX files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',  // Use Babel to transpile JavaScript and JSX
          },
        },
        {
          test: /\.css$/,  // Apply this rule to CSS files
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',  // Use MiniCssExtractPlugin in production to extract CSS into separate files
            'css-loader',  // Use css-loader to process CSS
          ],
        },
        {
          test: /\.less$/,  // Apply this rule to Less files
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'less-loader',  // Use less-loader to process Less files
          ],
        },
        {
          test: /\.(png|jpg|jpeg|svg)$/,  // Apply this rule to image files
          use: [
            {
              loader: 'file-loader',  // Use file-loader to handle image files
              options: {
                name: '[name].[hash].[ext]',  // Define the name of the output file
                outputPath: 'assets/images',  // Output images to 'assets/images'
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,  // Apply this rule to font files
          use: [
            {
              loader: 'file-loader',  // Use file-loader to handle font files
              options: {
                name: '[name].[hash].[ext]',  // Define the name of the output file
                outputPath: 'assets/fonts',  // Output fonts to 'assets/fonts'
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),  // Path to your HTML file
      }),
      isProduction && new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',  // Extract CSS into separate files in production
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.API_KEY': JSON.stringify(process.env.API_KEY || 'default-key'),
      }),
    ].filter(Boolean),
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'build'),  // Serve static files from 'build'
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
      hot: true,
    },
    optimization: isProduction ? {
      minimize: true,
      minimizer: [new TerserPlugin()],
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: 'single',
    } : {},
  };
};
