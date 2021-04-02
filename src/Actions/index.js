import {axiosWithAuth} from '../Utils/AxiosWithAuth'

// PLANT VARIABLES
export const GET_PLANTS = "GET_PLANTS"
export const ADD_PLANT = "ADD_PLANT"
export const EDIT_PLANT = "EDIT_PLANT"
export const DELETE_PLANT = "DELETE_PLANT"

export const  SET_CURRENT = "SET_CURRENT"
export const  CLEAR_CURRENT = "CLEAR_CURRENT"

// USER VARIABLES
export const EDIT_USER = "EDIT_USER"
export const SET_CURRENT_USER = "SET_CURRENT_USER"

// ACTIONS======================================================

export const getPlants = () => {
   return dispatch => {
      axiosWithAuth().get(`/plants`)
      .then( (response) => {
         //console.log("IN GET=================",response.data)
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

export const editPlant = (plantToEdit) => {
   return dispatch => {
      axiosWithAuth().put(`/plants/${plantToEdit.id}`,plantToEdit)
      .then( (response) => {
         if( response.status === 200 ){
            dispatch({ type: EDIT_PLANT, payload: plantToEdit });
         }
      })
      .catch(err => console.log("EDIT ERROR:", err));
   }
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

export const setCurrent = (plantToEdit) => {
   console.log( "IN SETCURRENT", plantToEdit)
   return dispatch => {
      dispatch({ type: SET_CURRENT, payload: plantToEdit });
   }
}

export const clearCurrent = () => {
   console.log("in clear current")
   return dispatch => {
      dispatch({ type: CLEAR_CURRENT });
   }
}

// USER ACTIONS=================================================

export const editUser = (userToEdit) => {
   return dispatch => {
      axiosWithAuth().put(`/edit/${userToEdit.id}`, userToEdit)
      .then( (response) => {
         if( response.status === 200 ){
            alert(`${userToEdit.username} successfully updated`)
            dispatch({ type: SET_CURRENT_USER, payload: userToEdit });
         }
      })
      .catch(err => console.log("USER EDIT ERROR:", err));
   }
}

export const setCurrentUser = (userToEdit) => {
   console.log( "IN  USER SET CURRENT", userToEdit)
   return dispatch => {
      dispatch({ type: SET_CURRENT_USER, payload: userToEdit });
   }
}

