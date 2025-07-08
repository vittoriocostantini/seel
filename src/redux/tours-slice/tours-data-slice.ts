import { createSlice, createSelector } from '@reduxjs/toolkit';
import { Tour } from '../../types/tour';
import { getToursForCountry, TourData } from '../../data/tours-data';

interface ToursState {
  toursByCountry: Record<string, Tour[]>;
}

const initialState: ToursState = {
  toursByCountry: {},
};

// Función para convertir TourData a Tour (ya no agrega isFavorite)
const convertTourDataToTour = (tourData: TourData): Tour => {
  return {
    ...tourData,
  };
};

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    initializeToursForCountry: (state, action) => {
      const { continent, country } = action.payload;
      const countryKey = `${continent}-${country}`;
      
      if (!state.toursByCountry[countryKey]) {
        const tourDataList = getToursForCountry(continent, country);
        state.toursByCountry[countryKey] = tourDataList.map(convertTourDataToTour);
      }
    },
  },
});

export const { initializeToursForCountry } = toursSlice.actions;

// Selectores
export const selectToursForCountry = createSelector(
  [(state: any) => state.tours.toursByCountry, (_: any, countryKey: string) => countryKey],
  (toursByCountry, countryKey) => toursByCountry[countryKey] || []
);

export const selectToursForContinentCountry = createSelector(
  [(state: any) => state.tours.toursByCountry, (_: any, continent: string, country: string) => `${continent}-${country}`],
  (toursByCountry, countryKey) => toursByCountry[countryKey] || []
);

export default toursSlice.reducer; 