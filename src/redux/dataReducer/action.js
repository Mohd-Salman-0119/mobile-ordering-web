// actions methods

import axios from "axios"
import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionType"
import { BASE_URL } from "../base_url"

const getDataRequest = () => {
     return { type: DATA_REQUEST }
}
const getDataSuccess = (payload) => {
     return { type: DATA_SUCCESS, payload }
}
const getDataFailure = () => {
     return { type: DATA_FAILURE }
}


export const fetchData = (queryString = "") => async (dispatch) => {

     try {
          dispatch(getDataRequest())
          const res = await axios.get(`${BASE_URL}/mobiles${queryString}`);
          dispatch(getDataSuccess(res.data.mobiles));
     } catch (error) {
          dispatch(getDataFailure())
          console.log("not found")
          console.log(error)
     }
}
export const fetchSingleProduct = (params) => async (dispatch) => {

     try {
          dispatch(getDataRequest())
          const res = await axios.get(`${BASE_URL}/mobiles/${params}`);
          dispatch(getDataSuccess(res.data.mobiles));
     } catch (error) {
          dispatch(getDataFailure())
          console.log("not found")
          console.log(error)
     }
}
