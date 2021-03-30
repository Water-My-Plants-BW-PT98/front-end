import { } from '../Actions/index'

const initialState = {
   user :{ 
         id: null,
         username: "",
         phone: "",
         password: ""
   }
}
 
 export const userReducer = (state = initialState, action) => {
    
   switch (action.type) {

     default:
         return state;
   }
 };