import {GET_USER_SCORE} from "../types";

export const getUserScore = (token) => {
    return async (dispatch) => {
        await fetch('http://localhost:3001/api/score', {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        }).then(res => res.json()).then(data => {
            dispatch(getUserScoreAction(data))
        })
    }
}


const getUserScoreAction = (score) => {
    return {
        type: GET_USER_SCORE,
        payload: score
    }
}
