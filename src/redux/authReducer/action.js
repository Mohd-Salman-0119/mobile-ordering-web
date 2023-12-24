import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionType"
import { BASE_URL } from '../base_url'

// Actions methods
const authRequest = () => {
     return { type: AUTH_REQUEST }
}
const authSuccess = (payload) => {
     return { type: AUTH_SUCCESS, payload }
}
const authFailure = () => {
     return { type: AUTH_FAILURE }
}


export const login = (email, password) => async (dispatch) => {
     try {
          dispatch(authRequest());
          const res = await axios.post(`${BASE_URL}/login`, { email, password });

          dispatch(authSuccess(res.data.token))
     } catch (error) {
          dispatch(authFailure())
     }
}
