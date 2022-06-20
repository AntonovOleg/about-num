import { configureStore } from '@reduxjs/toolkit';
import infoSlice from '../fetures/info/infoSlice';

export const store = configureStore({
  reducer: {
    data: infoSlice
  }
})