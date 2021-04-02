import {
   EDIT_USER,
   SET_CURRENT_USER  } from '../Actions/index'

const initialState = {
   user :{ 
         id: null,
         username: "",
         phone: "",
         password: ""
   },
   current: null
}
 
 export const userReducer = (state = initialState, action) => {
    
   switch (action.type) {

      case EDIT_USER:
         return {...state, user: action.payload }

      case SET_CURRENT_USER:
         console.log("in user reducer", action.payload )
         return { ...state, current: action.payload }
      
      // case CLEAR_CURRENT:
      //    return { ...state, current: null }

     default:
         return state;
   }
 };