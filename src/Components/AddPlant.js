import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

//REDUX
import { connect } from 'react-redux';
import { addPlant } from "../Actions/index";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Fauna One', serif;
    background-color: #2F97C1;
    color: #33261D;
`
const StyledH2 = styled.h2`
    font-family: Cinzel, serif;    
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

const AddPlant = (props) => {

   const history = useHistory()

    const [plantData, setPlantData] = useState({
        nickname: '',
        species: '',
        h2o_frequency: ''
    })

    const onChange = event => {
        setPlantData({
            ...plantData, 
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        props.addPlant(plantData)
        history.push(`/carddisplay`)
      }

    return(
        <StyledDiv>
            <StyledH2>New Plant?</StyledH2>
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
                    Add Plant
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
};

const mapStateToProps = (state) => {
   return {state};
 }

export default connect( mapStateToProps, {addPlant} )(AddPlant);