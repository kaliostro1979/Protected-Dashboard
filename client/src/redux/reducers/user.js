import {LOGIN_USER, REGISTER_USER, RESET_TO_INITIAL_STATE} from "../types";

const initialState = null

export const userReducer = (state = initialState, action)=>{
    switch (action.type){
        case REGISTER_USER:
            return action.payload
        case LOGIN_USER:
            return action.payload
        case RESET_TO_INITIAL_STATE:
            return initialState
        default:
            return state
    }
}
