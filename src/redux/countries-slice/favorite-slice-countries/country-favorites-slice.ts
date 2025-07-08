import { createSlice } from '@reduxjs/toolkit';

interface CountryFavoritesState {
  favorites: Record<string, boolean>; // key: `${continent}-${country}`
}

const initialCountryFavoritesState: CountryFavoritesState = {
  favorites: {},
};

export const countryFavoritesSlice = createSlice({
  name: 'countryFavorites',
  initialState: initialCountryFavoritesState,
  reducers: {
    toggleCountryFavorite: (state, action) => {
      const { continent, country } = action.payload;
      const key = `${continent}-${country}`;
      state.favorites[key] = !state.favorites[key];
    },
  },
});

export const { toggleCountryFavorite } = countryFavoritesSlice.actions;

export const selectCountryFavorite = (state: any, continent: string, country: string) => {
  const key = `${continent}-${country}`;
  return !!state.countryFavorites?.favorites?.[key];
}; 