import * as echo from '../actions/echo'
const initialState = {
  message: ""
}
export function getMessage(state=initialState, action) {
  switch(action.type) {
    case echo.ECHO_SUCCESS:
      return {
        message: action.payload.message
      }
    default:
      return state
  }
}
export const serverMessage = () => getMessage