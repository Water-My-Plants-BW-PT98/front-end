import { useState } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../Utils/AxiosWithAuth'
import { useHistory, Link } from "react-router-dom";

//REDUX
import { connect } from 'react-redux';
import { getPlants, setCurrentUser } from "../Actions/index";

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



const Login = (props) => {

   const { push } = useHistory()

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const onChange = event => {
        setLoginData({
            ...loginData, 
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post("/login", loginData)
            .then((res) => {    
               console.log("LOGIN SUCCESS", res.data);     
               window.localStorage.setItem("token", res.data.token);
               props.setCurrentUser({
                  id: res.data.id,
                  username: res.data.username,
               })
               props.getPlants(); 
               push("/CardDisplay"); 
            })
            .catch((err) => console.log(err));
    }

    return(
        <StyledDiv>
            <StyledH2>Login</StyledH2>
            <StyledForm onSubmit={onSubmit}> 
                <label htmlFor="usernameInput">
                    Username
                </label>
                <StyledInput type="text" name="username" id="usernameInput" onChange={onChange}/>
                    
                <label htmlFor="passwordInput">
                    Password
                </label>
                <StyledInput type="password"  name="password" id="passwordInput" onChange={onChange}/>
                
                <StyledButton>
                    Login
                </StyledButton>
                <Link to="/signup">Not Registered ?</Link>
            </StyledForm>
        </StyledDiv>
    )
};

const mapStateToProps = (state) => {
   return {state};
 }

export default connect( mapStateToProps, {getPlants, setCurrentUser} )(Login);
