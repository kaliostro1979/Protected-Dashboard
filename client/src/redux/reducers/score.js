import {GET_USER_SCORE} from "../types";

const initialState = null

export const scoreReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_USER_SCORE:
            return action.payload
        default:
            return state
    }
}
