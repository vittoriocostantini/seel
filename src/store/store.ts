import { configureStore } from '@reduxjs/toolkit';
import {
  countriesDataReducer,
  countryFavoritesSlice,
} from '../redux/countries-slice';
import { toursReducer, tourFavoritesSlice } from '../redux/tours-slice';
const store = configureStore({
  reducer: {
    carouselCards: countriesDataReducer,
    tours: toursReducer,
    countryFavorites: countryFavoritesSlice.reducer,
    tourFavorites: tourFavoritesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 