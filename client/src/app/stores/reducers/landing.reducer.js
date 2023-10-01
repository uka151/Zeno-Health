import * as Actions from "../actions"

const intialState={
    patientList:[]
}


const LandingReducers=(state=intialState,action)=>{

   switch(action.type){
       case Actions.GET_PATIENT_RECORD:
           return{
               ...state,
               patientList:action.payload
           }
      
        default:return state   
   }
}


export default LandingReducers