import { 
   GET_PLANTS,
   ADD_PLANT,
   DELETE_PLANT,
   EDIT_PLANT } from '../Actions/index'

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
         console.log("IN REDUCER")
         return {...state, plants: [...action.payload]} 
      
      case ADD_PLANT:
         return {...state, plants: [...state.plants, action.payload]}
      
      case DELETE_PLANT:
         return {
            ...state,
            plants: state.plants.filter( plant => 
               plant.id !== action.payload),
         }
      case EDIT_PLANT:
         return {
            ...state, 
            plants: state.plants.map( plant => 
               plant.id === action.payload.id ? action.payload : plant )
         }

     default:
         return state;
   }
 };