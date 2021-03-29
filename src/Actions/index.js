import {axiosWithAuth} from '../Utils/AxiosWithAuth'

// CONST VARIABLES
export const GET_PLANTS = "GET_PLANTS"
export const ADD_PLANT = "ADD_PLANT"
export const EDIT_PLANT = "EDIT_PLANT"
export const DELETE_PLANT = "DELETE_PLANT"

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

export const addPlant = (plantData) => {
   return dispatch => {
      axiosWithAuth().post(`/plants`, plantData)
      .then( (response) => {
         dispatch({ type: ADD_PLANT, payload: response.data[0] });
      })
      .catch(err => console.log("ADD ERROR:", err));
   }

}

export const editPlant = () => {
   
}

export const deletePlant = (plantId) => {
   return dispatch => {
      axiosWithAuth().delete(`/plants/${plantId}`)
      .then( (response) => {
         if( response.status === 200 ){
            dispatch({ type: DELETE_PLANT, payload: plantId });
         }
      })
      .catch(err => console.log("DELETE ERROR:", err));
   }
}
