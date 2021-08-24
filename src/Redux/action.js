import {GETDATA_FAILURE,GETDATA_REQUEST,GETDATA_SUCCESS,SEARCHDATA_FAILURE,SEARCHDATA_REQUEST,
SEARCHDATA_SUCCESS,ID_FAILURE,ID_REQUEST,ID_SUCCESS} from "./actiontype"
import React from 'react'
import axios from "axios"

export const getDataRequest = () => {

return {
    type:GETDATA_REQUEST
}
}
export const getDataSuccess = (payload) => {

    return {
        type:GETDATA_SUCCESS,
        payload
    }
    }
    
    export const getDataFailure = (error) => {

        return {
            type:GETDATA_FAILURE,
            payload:error
        }
        }
        export const getData=()=> dispatch=>{
            dispatch(getDataRequest())
            return axios.get("http://localhost:3001/hotel")
            .then((res)=>{
            console.log(res.data)  
            dispatch(getDataSuccess(res.data))
                })
                .catch((err)=>{
                    dispatch(getDataFailure(err))
                })

        }
        

    
      