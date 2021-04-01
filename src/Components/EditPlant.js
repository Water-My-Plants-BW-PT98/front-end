import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

//REDUX
import { connect } from 'react-redux';
import { editPlant, setCurrent } from "../Actions/index";

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

   const history = useHistory();

    const [plantData, setPlantData] = useState({
        id: null,
        nickname: "",
        species: "",
        h2o_frequency: ""
    },[])

    useEffect( () => {
       setPlantData(props.state.plantsReducer.current)
    },[props.state.plantsReducer]);

    const onChange = event => {
       setPlantData({
          ...plantData, 
          [event.target.name]: event.target.value,
       })
    }

    const onSubmit = event => {
        event.preventDefault();
        props.editPlant(plantData)
        history.push('/carddisplay')
    }

    return(
        <StyledDiv>
            <StyledH2>Edit Plant?</StyledH2>
            <StyledForm onSubmit={onSubmit}> 
                
            <label htmlFor="nicknameInput">
                    Nickname
                </label>
                <StyledInput 
                     type="text" 
                     name="nickname" 
                     id="nicknameInput" 
                     value={plantData ? plantData.nickname : ""}
                     onChange={onChange}
                 />
   
            <label htmlFor="speciesInput">
                    Species
                </label>
                <StyledInput 
                     type="text" 
                     name="species" 
                     id="speciesInput" 
                     value={plantData ? plantData.species : ""}
                     onChange={onChange}
                 />

                
            <label htmlFor="h2oInput">
                    Watering Frequency
                </label>
                <StyledInput 
                     type="text" 
                     name="h2o_frequency" 
                     id="h2oFrequencyInput" 
                     value={plantData ? plantData.h2o_frequency : ""}
                     onChange={onChange}
                 />

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

export default connect(mapStateToProps, {editPlant, setCurrent})(EditPlant);