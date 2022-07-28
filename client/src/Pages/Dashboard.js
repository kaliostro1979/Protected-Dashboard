import React, {useEffect, useState} from 'react';
import {Card, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {getUserScore} from "../redux/actions/getUserScore";
import {useDispatch, useSelector} from "react-redux";
import PageHeader from "../Components/PageHeader";


const Dashboard = () => {
    const [token, setToken] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const score = useSelector(state => state.score)

    const [passed, setPassed] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
        if (!token) {
            navigate('/login')
        }
    }, [navigate])

    useEffect(() => {
        if (token) {
            dispatch(getUserScore(JSON.parse(token)))
        }
    }, [dispatch, token])

    useEffect(() => {
        if (score){
            if (score.score && parseInt(score.score.userScore) >= parseInt(score.score.max / 2)) {
                setPassed(true)
            }
        }
    }, [score])

       const handleClick = () => {
           localStorage.removeItem('token')
           window.location.reload()
       }

    return (
        <div className={"dashboard"}>
            <div className={"dashboard-header"}>
                <PageHeader heading={"Dashboard"} action={"Logout"} callBack={handleClick}/>
            </div>
            <div className={"score-results"}>
                {
                    score ?
                        <Card className={"score-results__card"} sx={{mt: 30}}>
                            <Typography component="strong" variant="h5" className={"score-results__heading"} display={"block"} sx={{fontWeight: "medium", mb: 1}}>Exam result</Typography>
                            <Typography component="p" variant="caption">Your score is</Typography>
                            <Typography component="span" variant="h5" sx={{mr: 0.5}} className={"score-results__value"}>{score.score ? score.score.userScore : "9"}</Typography>
                            <Typography component="span" variant="h5" sx={{mr: 0.5}} className={"score-results__value"}>of</Typography>
                            <Typography component="span" variant="h5" className={"score-results__value"}>{score.score ? score.score.max : "10"}</Typography>
                            <Typography component="p" variant="caption" sx={{textTransform: "uppercase"}}>{passed ? "Passed" : "Not Passed"}</Typography>
                        </Card> : null
                }
            </div>
        </div>
    );
};

export default Dashboard;
