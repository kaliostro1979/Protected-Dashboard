import React, {useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../redux/actions/userAction";
import {Link, useNavigate} from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormHeader from "../Components/FormHeader";


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const response = useSelector(state => state.user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    useEffect(() => {
        if (response) {
            if (response.user) {
                localStorage.setItem('token', JSON.stringify(response.user))
                navigate('/dashboard')
            }

            if (response.error) {
                setError(true)
            }
        }
    }, [navigate, response])

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'email':
                return setEmail(e.target.value)
            case 'password':
                return setPassword(e.target.value)
            default:
                return null
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email && email,
            password: password && password
        }
        dispatch(loginUser(data))
    }

    return (
        <div className={'form-wrapper'}>
            <Box component="form" noValidate sx={{mt: 1}} className={'form-main'} onSubmit={(e) => handleSubmit(e)}>
                <FormHeader heading={"Sign in"} icon={<LockOutlinedIcon/>}/>

                {
                    error ? <Typography className={'error'} variant={'caption'}>Login or password is incorrect</Typography> : null
                }
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => handleInput(e)}
                    value={email}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => handleInput(e)}
                    value={password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                >
                    Sign In
                </Button>
                <Link to={'/registration'}>Registration</Link>
            </Box>
        </div>
    );
};

export default Login;
