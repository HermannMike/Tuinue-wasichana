import React from 'react';
import './DonationHistory.css';

const donations = [
  { id: 1, amount: 50, date: '2023-01-15' },
  { id: 2, amount: 100, date: '2023-02-20' },
  { id: 3, amount: 75, date: '2023-03-10' },
];

const DonationHistory = () => {
  return (
    <div>
      <h1>Donation History</h1>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            <p>Amount: ${donation.amount}</p>
            <p>Date: {donation.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationHistory;