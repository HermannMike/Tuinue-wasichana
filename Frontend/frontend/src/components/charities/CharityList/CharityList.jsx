import React from 'react';
import './CharityList.css';

const charities = [
  { id: 1, name: 'Charity A', description: 'Description for Charity A' },
  { id: 2, name: 'Charity B', description: 'Description for Charity B' },
  { id: 3, name: 'Charity C', description: 'Description for Charity C' },
];

const CharityList = () => {
  return (
    <div>
      <h1>Charity List</h1>
      <ul>
        {charities.map((charity) => (
          <li key={charity.id}>
            <h2>{charity.name}</h2>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharityList;