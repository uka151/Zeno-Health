import * as Actions from "../actions"

const intialState={
    authCode:0
}


const LandingReducers=(state=intialState,action)=>{

   switch(action.type){
       case Actions.GET_RESPONSE_FROM_ZENDESK:
           return{
               ...state,
               authCode:action.payload
           }

        default:return state   
   }
}


export default LandingReducers