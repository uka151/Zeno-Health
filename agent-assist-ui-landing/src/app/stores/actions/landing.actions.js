import axios from "axios"
export const GET_RESPONSE_FROM_ZENDESK = "GET_RESPONSE_FROM_ZENDESK"
export const SET_RESPONSE_MESSAGE = "SET_RESPONSE_MESSAGE"

export const setOrgZendeskUniqueId = (value) => {
    return dispatch => dispatch({
        type: GET_RESPONSE_FROM_ZENDESK,
        payload: value
    })
}

export const setResponseMessage = (value) => {
    return dispatch => dispatch({
        type: SET_RESPONSE_MESSAGE,
        payload: value
    })
}

export const getProvisioningStatus = (transactionId, subdomain, token) => {
    // only for place holder
    return async dispatch => {
        try {
            axios({
                method: "POST",
                url: `https://njzpo2em34.execute-api.us-east-1.amazonaws.com/v1/initiate`,
                data: {
                    "transactionId": transactionId
                    ,
                    "subdomain": subdomain,
                    "accessToken": token
                }
            }).then((response) => {
                dispatch({
                    type: GET_RESPONSE_FROM_ZENDESK,
                    payload: response.data ? response.data.result : null
                })
                dispatch(setResponseMessage("Thanks for choosing us! We are so grateful and hope we met your expectations. Please refresh your app to continue"))
            })
                .catch(ex => {
                    dispatch({
                        type: SET_RESPONSE_MESSAGE,
                        payload: "Oops. Something went wrong. Please try again later"
                    })

                })
        } catch (ex) {
            console.log("Ops Something went wrong", ex.message)
        }
    }
}

