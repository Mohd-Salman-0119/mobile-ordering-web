export const TOGGLE_THEME = "TOGGLE_THEME"

const initState = {
     theme: false
}
export const themeReducer = (state = initState, action) => {
     switch (action.type) {
          case TOGGLE_THEME: return {
               theme: !state.theme
          }
          default: return state;
     }
} 
