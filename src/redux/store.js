import { configureStore } from '@reduxjs/toolkit';
import monsterSlice from './slices/monsterSlice';

const store = configureStore({
  reducer: {
    monsters: monsterSlice,
  },
});
