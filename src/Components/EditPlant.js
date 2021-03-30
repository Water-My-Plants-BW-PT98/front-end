import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';

//REDUX
import { connect } from 'react-redux';
import { editPlant } from "../Actions/index";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledH2 = styled.h2`
    
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    margin: 5%;
    border-radius: 5px;
`
const StyledButton = styled.button`
    width: 50%;
    margin: 5%;
`

const EditPlant = (props) => {

console.log(props.state.plantsReducer.plants)

   const {id} = useParams();

   const getPlantToEdit = (idToEdit) => {
     
      for( let i = 0; i < props.state.plantsReducer.plants.length; i++ ){

         if( props.state.plantsReducer.plants[i].id === parseInt(idToEdit) ){
            const plantInfo = { 
               id: props.state.plantsReducer.plants[i].id,
               nickname: props.state.plantsReducer.plants[i].nickname,
               species: props.state.plantsReducer.plants[i].species,
               h2o_frequency: props.state.plantsReducer.plants[i].h2o_frequency
            }
            return plantInfo
         }
      }
   }

   const plantToEdit = getPlantToEdit(id)

    const [plantData, setPlantData] = useState({
        id: plantToEdit ? plantToEdit.id : null,
        nickname: plantToEdit ? plantToEdit.nickname : "",
        species: plantToEdit ? plantToEdit.species : "",
        h2o_frequency: plantToEdit ? plantToEdit.h2o_frequency : ""
    },[])

    const onChange = event => {
        setPlantData({
            ...plantData, 
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        props.editPlant(plantData)
    }

    return(
        <StyledDiv>
            <StyledH2>Edit Plant?</StyledH2>
            <StyledForm onSubmit={onSubmit}> 
                
            <label htmlFor="nicknameInput">
                    Nickname
                </label>
                <StyledInput type="text" name="nickname" id="nicknameInput" onChange={onChange}/>

                
            <label htmlFor="speciesInput">
                    Species
                </label>
                <StyledInput type="text" name="species" id="speciesInput" onChange={onChange}/>

                
            <label htmlFor="h2oInput">
                    Watering Frequency
                </label>
                <StyledInput type="text" name="h2o_frequency" id="h2oFrequencyInput" onChange={onChange}/>

                <StyledButton>
                    Edit Plant
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
};

const mapStateToProps = (state) => {
   return {state};
 }

export default connect(mapStateToProps, {editPlant})(EditPlant);