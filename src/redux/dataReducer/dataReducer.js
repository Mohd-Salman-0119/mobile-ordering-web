import { DATA_FAILURE, DATA_REQUEST, DATA_SUCCESS } from "./actionType"

const initState = {
     data: [],
     isLoading: false,
     isError: false,
     successMessage: "",
     errorMessage: ""
}
export const dataReducer = (state = initState, { type, payload }) => {
     switch (type) {
          case DATA_REQUEST: return {
               ...state,
               isLoading: true
          }
          case DATA_SUCCESS: return {
               ...state,
               isLoading: false,
               data: payload,
          }
          case DATA_FAILURE: return {
               ...state,
               isLoading: false,
               isError: true
          }
          default:
               return state;
     }
}