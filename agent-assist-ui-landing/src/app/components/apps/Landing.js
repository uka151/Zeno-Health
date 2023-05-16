import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import * as Actions from "../../stores/actions"
import { Typography ,CircularProgress} from '@mui/material';





const LandingApp = (props) => {
    const dispatch = useDispatch()

    const [loader, setLoader] = useState(false)
    
    const user = useSelector((state) => state.LandingReducers.authCode)
  
    useEffect(() => {
        setLoader(true)
        dispatch(Actions.getProvisioningStatus("umeshagrahari87@gmail.com"))
            .then(() => {
                setTimeout(() => {
                    setLoader(false)
                }, 2000)
            })

    }, [dispatch])

    return (
        <div className="App">
            <div className='App-header'>
                <img className='App-logo' src={"images/readyly_logo.png"} alt="logo" />
            </div>
            {loader ? <div className='App-loader'>
                <CircularProgress style={{ color: "#152938", marginTop: 60 }} />
                <Typography style={{ color: "#152938", fontSize: 24, fontWeight: 700, marginTop: 10, fontFamily: "sans-serif" }}>Please wait...</Typography>
            </div> : <div className='App-loader'>
                <Typography style={{ color: "#152938", fontSize: 20, fontWeight: 500, marginTop: 20, fontFamily: "sans-serif" }}>{user && user !== null && user.firstName ? "Hi " + user.firstName + " Thanks for choosing us! We are so grateful and hope we met your expectations. " : "Thanks for choosing us! We are so grateful and hope we met your expectations."}</Typography>

            </div>}
        </div>
    )
}


export default LandingApp