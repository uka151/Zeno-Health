import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"

import { Typography ,CircularProgress} from '@mui/material';
import Header from "./Header"
import Dashboard from './Dashboard';





const LandingApp = (props) => {
    const dispatch = useDispatch()

    const [loader, setLoader] = useState(false)

    
    const responseMessage = useSelector((state)=>state.LandingReducers.responseMessage)

   
  
    useEffect(() => {
        setLoader(true)
     //   let transactionId =Array.from(Array(20), () => Math.floor(Math.random() * 36).toString(36)).join('')
      //  dispatch(Actions.getProvisioningStatus(transactionId,"readylycx","88a5070e05e37a81c219567d3d0ead1903e9c1106542e8b0b951aafab4ee9dc7"))
      //      .then(() => {
      //          setTimeout(() => {
      //              setLoader(false)
      //          }, 2000)
      //      })

    }, [dispatch])

    return (
        <div className="App">
              <Header/>
              <Dashboard/>
            
        </div>
    )
}


export default LandingApp