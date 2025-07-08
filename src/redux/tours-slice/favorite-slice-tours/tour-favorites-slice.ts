import { createSlice, createSelector } from '@reduxjs/toolkit';

interface TourFavoritesState {
  favorites: Record<string, boolean>; // key: `${countryKey}-${tourId}`
}

const initialTourFavoritesState: TourFavoritesState = {
  favorites: {},
};

export const tourFavoritesSlice = createSlice({
  name: 'tourFavorites',
  initialState: initialTourFavoritesState,
  reducers: {
    toggleTourFavorite: (state, action) => {
      const { countryKey, tourId } = action.payload;
      const key = `${countryKey}-${tourId}`;
      state.favorites[key] = !state.favorites[key];
    },
  },
});

export const { toggleTourFavorite } = tourFavoritesSlice.actions;

export const selectTourFavorite = (state: any, countryKey: string, tourId: string) => {
  const key = `${countryKey}-${tourId}`;
  return !!state.tourFavorites?.favorites?.[key];
};

export const selectTourFavoritesForCountry = createSelector(
  [
    (state: any) => state.tourFavorites?.favorites,
    (_: any, countryKey: string) => countryKey
  ],
  (favorites, countryKey) => {
    if (!favorites) return {};
    return Object.fromEntries(
      Object.entries(favorites).filter(([key]) =>
        key.startsWith(`${countryKey}-`)
      )
    );
  }
);

export default tourFavoritesSlice.reducer; 