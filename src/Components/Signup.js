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

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        password: ''
    })

    const onChange = event => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        axios.post('', { formData })
    }

    return(
        <StyledDiv>
            <StyledH2>Get Started Now:</StyledH2>
            <StyledForm onSubmit={onSubmit}> 
                <label htmlFor="usernameInput">
                    Username
                </label>
                <StyledInput type="text" name="username" id="usernameInput" onChange={onChange}/>
                    
                <label htmlFor="phoneInput">
                    Phone:
                </label>
                <StyledInput type="tel" name="phone" id="phoneInput" onChange={onChange}/>
                    
                <label htmlFor="passwordInput">
                    Password
                </label>
                <StyledInput type="password"  name="password" id="passwordInput" onChange={onChange}/>
                <StyledButton>
                    Sign Up!
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
};

export default Signup;