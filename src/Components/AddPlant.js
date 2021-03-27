import { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';

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

const AddPlant = () => {
    const [plantData, setPlantData] = useState({
        nickname: '',
        species: '',
        h20Frequency: ''
    })

    const onChange = event => {
        setPlantData({
            ...plantData, 
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        axios.post('', { plantData })
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

                
            <label htmlFor="nicknameInput">
                    Watering Frequency
                </label>
                <StyledInput type="text" name="h20Frequency" id="h20FrequencyInput" onChange={onChange}/>

                
                    
               
                
                <StyledButton>
                    Add Plant
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
};

export default AddPlant;