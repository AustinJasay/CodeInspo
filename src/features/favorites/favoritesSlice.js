import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesArray: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (
        !state.favoritesArray.some(
          (favorite) => favorite.id === action.payload.id
        )
      ) {
        state.favoritesArray.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favoritesArray = state.favoritesArray.filter(
        (fav) => fav.id !== action.payload
      );
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const getFavorites = (state) => {
  return state.favorites.favoritesArray;
};
