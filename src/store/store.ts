import { configureStore } from '@reduxjs/toolkit';
import carouselCardsReducer from './carousel-cards-slice';

const store = configureStore({
  reducer: {
    carouselCards: carouselCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store; 