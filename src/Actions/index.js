import {axiosWithAuth} from '../Utils/AxiosWithAuth'

// CONST VARIABLES
export const GET_PLANTS = "GET_PLANTS"

// ACTIONS======================================================

export const getPlants = () => {
   return dispatch => {
      axiosWithAuth().get(`/plants`)
      .then( (response) => {
         console.log("IN GET=================",response.data)
         dispatch({ type: GET_PLANTS, payload: response.data });
      })
      .catch(err => console.log("GET ERROR:", err));
   }
}
