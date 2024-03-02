import {  createSlice } from "@reduxjs/toolkit";

import { STATUSES } from "../globals/misc/statuses";
import {APIAuthenticated} from "../http";

const rentSlice = createSlice({
    name : "rent",
    initialState :{

        status : STATUSES.SUCCESS,
        rents : []
     
    },
    reducers : {

       setStatus(state,action){
        state.status = action.payload
       },
       setRents(state,action){
        state.rents = action.payload
       },
       approveProductById(state,action){
        const index = state.rents.findIndex(rent=>rent._id === action.payload.productId)
        if(index !== -1){
            state.rents[index] = action.payload.data
        }
    },

    }
})

export const {setRents,setStatus,approveProductById} = rentSlice.actions 

export default rentSlice.reducer 

export function fetchRent(){
    return async function fetchRentThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await APIAuthenticated.get("/admin/renter/pendingApproval")
            dispatch(setRents(response.data.data))
            
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function approveProduct(rentId){
    return async function approveProductThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            
            const response = await APIAuthenticated.patch(`admin/renter/pendingApproval/approve/${rentId}`)
            console.log(response,"Response")
            dispatch(approveProductById({rentId,data : response.data.data}))
            
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}