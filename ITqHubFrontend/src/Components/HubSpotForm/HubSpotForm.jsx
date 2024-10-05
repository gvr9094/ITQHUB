import { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
    // Initialize HubSpot form
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: 'na1',
        portalId: '47112509', // Replace with your HubSpot Portal ID
        formId: '4de7a6c8-eab0-4c5b-90ba-6617400db77b', // Replace with your HubSpot Form ID
        target: '#hubspot-form-container'
      });
    }
  }, []);

  return null; // This component doesn’t render anything itself
};

export default HubSpotForm;
