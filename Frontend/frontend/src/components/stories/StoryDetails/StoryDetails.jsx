import React from 'react';
import './StoryDetails.css';

const story = {
  id: 1,
  title: 'Story 1',
  content: 'Full content of Story 1. This is where the detailed story would be displayed.',
  // Add other details as needed
};

const StoryDetails = () => {
  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.content}</p>
    </div>
  );
};

export default StoryDetails;