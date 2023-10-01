import axios from "axios"
export const GET_PATIENT_RECORD = "GET_PATIENT_RECORD"



export const addPatientRecord = (patientDetails) => {
    // only for place holder
    return async dispatch => {
        try {
            axios({
                method: "POST",
                url: `https://njzpo2em34.execute-api.us-east-1.amazonaws.com/v1/initiate`,
                data: patientDetails
            }).then((response) => {
                
               
            })
                .catch(ex => {
                   

                })
        } catch (ex) {
            console.log("Ops Something went wrong", ex.message)
        }
    }
}


export const updatePatientPatch = (patientDetails,actionType) => {
    // only for place holder
    return async dispatch => {
        try {
            axios({
                method: "patch",
                url: `https://njzpo2em34.execute-api.us-east-1.amazonaws.com/v1/initiate`,
                data: {
                    patientDetails:patientDetails,
                    actionType:actionType
                }
            }).then((response) => {
                
               
            })
                .catch(ex => {
                   

                })
        } catch (ex) {
            console.log("Ops Something went wrong", ex.message)
        }
    }
}

