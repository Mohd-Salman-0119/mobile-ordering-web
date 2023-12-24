import { AUTH_REQUEST, AUTH_SUCCESS } from "./actionType"

const initState = {
     auth: false,
     token: null,
     successMessage: null,


}

export const authReducer = (state=initState, {type, payload})=>{
     switch(type){
          case AUTH_SUCCESS: return {
               ...state,
               auth: true,
               token: payload,
               successMessage: "Login Successfull"
          }
          default: return state
     }
}