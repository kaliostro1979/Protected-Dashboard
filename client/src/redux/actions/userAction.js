import {LOGIN_USER, REGISTER_USER} from "../types";

export const registerUser = (data)=>{
    return async (dispatch)=>{
        await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res=>res.json())
            .then(data=>{
                dispatch(registerUserAction(data))
            })
    }
}

export const loginUser = (data)=>{
    return async (dispatch)=>{
        await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(res=>res.json())
            .then(data=>{
                dispatch(loginUserAction(data))
            })
    }
}


export const registerUserAction = (data)=>{
    return {
        type: REGISTER_USER,
        payload: data
    }
}

export const loginUserAction = (data)=>{
    return {
        type: LOGIN_USER,
        payload: data
    }
}
