import projects from '../../data/projects';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projectsArray: projects,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    randomProject: (state, action) => {
      state.currentProject =
        state.projectsArray[
          Math.floor(Math.random() * state.projectsArray.length)
        ];
    },
    setProjectById: (state, action) => {
      state.currentProject = state.projectsArray[action.payload];
    },
  },
});

export const projectsReducer = projectsSlice.reducer;
export const { randomProject, setProjectById } = projectsSlice.actions;

export const getProjectById = (id) => (state) => {
  const project = state.projects.projectsArray.find(
    (project) => project.id === id
  );
  return project;
};

export const getProjectIds = (state) => {
  return state.projects.projectsArray.map((project) => project.id);
};

export const getCurrentProject = (state) => {
  return state.projects.currentProject;
};
