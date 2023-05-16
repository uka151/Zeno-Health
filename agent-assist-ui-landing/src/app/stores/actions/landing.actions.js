import axios from "axios"
export const GET_RESPONSE_FROM_ZENDESK = "GET_RESPONSE_FROM_ZENDESK"


export const setOrgZendeskUniqueId=(value)=>{
    return dispatch=>dispatch({
        type:GET_RESPONSE_FROM_ZENDESK,
        payload:value
    })
}


export const getProvisioningStatus=(email)=>{
    // only for place holder
   return async dispatch=>{
    try{         
        axios({
            method: "POST",
            url: `https://prism-qa-api.readyly.app/users/authenticateWithGoogle?source=APP`,
            data: {
              email:email
            }
          }).then((response)=>{
              dispatch({
                  type:GET_RESPONSE_FROM_ZENDESK,
                  payload:response.data?response.data.result:null
              })
          })
    }catch(ex){
        console.log("Ops Something went wrong",ex.message)
    }
   }
}

