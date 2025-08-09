import { configureStore } from "@reduxjs/toolkit";
import rootRouter from './rootRouter';

const store = configureStore({
    reducer: rootRouter,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;