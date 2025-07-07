import { configureStore } from '@reduxjs/toolkit';
import carouselCardsReducer from '../redux/countries-slice/countries-data-slice';
import toursReducer from '../redux/tours-slice/tours-data-slice';

const store = configureStore({
  reducer: {
    carouselCards: carouselCardsReducer,
    tours: toursReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 