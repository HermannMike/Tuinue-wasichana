import React from 'react';
import './CharityDetails.css';

const charity = {
  id: 1,
  name: 'Charity A',
  description: 'Detailed description for Charity A. This is where more information about the charity would be displayed.',
  // Add other details as needed
};

const CharityDetails = () => {
  return (
    <div>
      <h1>{charity.name}</h1>
      <p>{charity.description}</p>
    </div>
  );
};

export default CharityDetails;