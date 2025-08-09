import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './slices/userSLice';

const rootRouter = combineReducers({
    user:userReducer,
});

export default rootRouter;