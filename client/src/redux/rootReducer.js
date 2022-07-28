import {combineReducers} from "@reduxjs/toolkit";
import {userReducer} from "./reducers/user";
import {scoreReducer} from "./reducers/score";


export const rootReducer = combineReducers({
    user: userReducer,
    score: scoreReducer
})
