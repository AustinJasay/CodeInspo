import { projectsReducer } from '../features/projects/projectSlice';
import { favoritesReducer } from '../features/favorites/favoritesSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    favorites: favoritesReducer,
  },
});
