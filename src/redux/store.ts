import {configureStore} from "@reduxjs/toolkit";
import userReducer from './UserSlice';
const reduxLogger = require("redux-logger");


const logger = reduxLogger.createLogger();


const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch