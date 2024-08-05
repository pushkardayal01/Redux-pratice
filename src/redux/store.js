import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './Slice/Todoslice';

export const store = configureStore({
  reducer: {
    todo : TodoReducer
  },
})