import React, {useState, useEffect} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../redux/actions/userAction";
import {Link, useNavigate} from "react-router-dom";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FormHeader from "../Components/FormHeader";


const Registration = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const response = useSelector(state => state.user)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (response) {
            if (response.user){
                navigate('/login')
            }else {
                setError(response.error)
            }
        }
    }, [response, navigate])


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
        dispatch(registerUser(data))
    }


    return (
        <div className={'form-wrapper'}>
            <Box component="form" noValidate sx={{mt: 1}} className={'form-main'} onSubmit={(e) => handleSubmit(e)}>
                <FormHeader heading={"Register account"} icon={<LockOpenOutlinedIcon/>}/>
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
                {
                    error ? <Typography className={'error'} variant={'caption'}>{error}</Typography> : null
                }

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
                    Register
                </Button>
                <Link to={'/login'}>Login</Link>
            </Box>
        </div>
    );
};

export default Registration;
