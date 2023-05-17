import * as Actions from "../actions"

const intialState={
    authCode:0,
    responseMessage:""
}


const LandingReducers=(state=intialState,action)=>{

   switch(action.type){
       case Actions.GET_RESPONSE_FROM_ZENDESK:
           return{
               ...state,
               authCode:action.payload
           }
        case Actions.SET_RESPONSE_MESSAGE:
         return{
             ...state,
             responseMessage:action.payload
         }
        default:return state   
   }
}


export default LandingReducers