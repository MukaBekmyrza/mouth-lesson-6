import { configureStore, combineReducers } from "@reduxjs/toolkit";
import countReducer from "./slices/counterSlice";
import usersReducer from "./slices/usersSlice";
import bookReducer from "./slices/bookSlice";


const rootReducer = combineReducers({ count: countReducer, users: usersReducer, books: bookReducer })
const store = configureStore({ reducer: rootReducer })

export default store;   