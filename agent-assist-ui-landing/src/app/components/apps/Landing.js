import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import * as Actions from "../../stores/actions"
import { Typography ,CircularProgress} from '@mui/material';





const LandingApp = (props) => {
    const dispatch = useDispatch()

    const [loader, setLoader] = useState(false)

    
    const responseMessage = useSelector((state)=>state.LandingReducers.responseMessage)

   
  
    useEffect(() => {
        setLoader(true)
        let transactionId =Array.from(Array(20), () => Math.floor(Math.random() * 36).toString(36)).join('')
        dispatch(Actions.getProvisioningStatus(transactionId,"readylycx","88a5070e05e37a81c219567d3d0ead1903e9c1106542e8b0b951aafab4ee9dc7"))
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
                <Typography style={{ color: "#152938", fontSize: 20, fontWeight: 500, marginTop: 20, fontFamily: "sans-serif" }}>{responseMessage}</Typography>

            </div>}
        </div>
    )
}


export default LandingApp