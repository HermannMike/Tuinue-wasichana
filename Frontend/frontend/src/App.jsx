import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CharityList from './components/charities/CharityList/CharityList';
import CharityDetails from './components/charities/CharityDetails/CharityDetails';
import CharityApply from './components/charities/CharityApply/CharityApply';
import DonationForm from './components/donations/DonationForm/DonationForm';
import DonationHistory from './components/donations/DonationHistory/DonationHistory';
import StoriesList from './components/stories/StoriesList/StoriesList';
import StoryDetails from './components/stories/StoryDetails/StoryDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/charities">Charities</Link>
            </li>
            <li>
              <Link to="/donations">Donations</Link>
            </li>
            <li>
              <Link to="/stories">Stories</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/charities" element={<CharityList />} />
          <Route path="/charities/:id" element={<CharityDetails />} />
          <Route path="/charities/apply" element={<CharityApply />} />
          <Route path="/donations" element={<DonationForm />} />
          <Route path="/donations/history" element={<DonationHistory />} />
          <Route path="/stories" element={<StoriesList />} />
          <Route path="/stories/:id" element={<StoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
