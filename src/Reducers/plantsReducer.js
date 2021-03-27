import { GET_PLANTS } from '../Actions/index'

const initialState = {
   plants : [
      {
         id: null,
         nickname: "",
         species: "",
         h2o_frequency: ""
      },
   ]
}
 
 export const plantsReducer = (state = initialState, action) => {
    
   switch (action.type) {

      case GET_PLANTS:
         return {...state, plants: [...action.payload]} // THIS MAY NEED TO BE CORRECTED

     default:
       return state;
   }
 };