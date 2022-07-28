import {LOGIN_USER, REGISTER_USER} from "../types";

const initialState = null

export const userReducer = (state = initialState, action)=>{
    switch (action.type){
        case REGISTER_USER:
            return action.payload
        case LOGIN_USER:
            return action.payload
        default:
            return state
    }
}
