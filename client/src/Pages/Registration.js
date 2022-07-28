import React, {useState, useEffect} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {registerUser, resetToInitialState} from "../redux/actions/userAction";
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

    useEffect(()=>{
        dispatch(resetToInitialState())
    }, [dispatch])

    useEffect(() => {
        if (response) {
            if (response.status === "success"){
               /* navigate('/login')*/
                //window.location.reload()
            }else {
                setError(response.error)
            }
        }else {
            setError("")
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
                    error={error !== ""}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    type="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => handleInput(e)}
                    value={email}
                    helperText={error ? error : ""}
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
                    Register
                </Button>
                <Link to={'/login'}>Login</Link>
            </Box>
        </div>
    );
};

export default Registration;
