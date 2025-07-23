import { configureStore } from '@reduxjs/toolkit';
import charitiesReducer from './components/charities/charitiesSlice';
import donationsReducer from './components/donations/donationsSlice';
import storiesReducer from './components/stories/storiesSlice';

export const store = configureStore({
  reducer: {
    charities: charitiesReducer,
    donations: donationsReducer,
    stories: storiesReducer,
  },
});