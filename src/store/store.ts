/**
 * redux store
 * Author:huangshouhua
 * Date:2025-11-12
 */
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from "./slices";
const store = configureStore({
  reducer: rootReducer,
});
export default store;