import React from 'react';
import './StoriesList.css';

const stories = [
  { id: 1, title: 'Story 1', content: 'Content for Story 1' },
  { id: 2, title: 'Story 2', content: 'Content for Story 2' },
  { id: 3, title: 'Story 3', content: 'Content for Story 3' },
];

const StoriesList = () => {
  return (
    <div>
      <h1>Stories List</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <h2>{story.title}</h2>
            <p>{story.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoriesList;