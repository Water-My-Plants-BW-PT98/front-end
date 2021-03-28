import { useState } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { axiosWithAuth } from '../Utils/AxiosWithAuth'
import { useHistory, Link } from "react-router-dom";

//REDUX
import { connect } from 'react-redux';
import { getPlants } from "../Actions/index";

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

const Signup = (props) => {

    const { push } = useHistory()

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
        axiosWithAuth().post("/register", formData)
        .then((res) => {    
           console.log("REGISTER SUCCESS", res);     
           window.localStorage.setItem("token", res.data.token);
           props.getPlants(); // THIS CAN BE MOVED TO THE DISPLAY PAGE ?
           push("/CardDisplay"); // ADD URL OF "DISPLAY" PAGE OF CARDS
        })
        .catch((err) => console.log(err));
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
                    Phone
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

const mapStateToProps = (state) => {
   return {state};
 }

export default connect( mapStateToProps, {getPlants} )(Signup);