import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

//REDUX
import { connect } from 'react-redux';
import { editUser, setCurrentUser } from "../Actions/index";

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

const EditUser = (props) => {

   const history = useHistory();

    const [userData, setUserData] = useState({
        id: props.state.userReducer.current ? props.state.userReducer.current.id : null,
        username: props.state.userReducer.current ? props.state.userReducer.current.username : "",
        password: "",
        phone_number: ""
    },[])


    const onChange = event => {
       setUserData({
          ...userData, 
          [event.target.name]: event.target.value,
       })
    }

    const onSubmit = event => {
        event.preventDefault();
        props.editUser(userData)
        history.push('/carddisplay')
    }

    return(
        <StyledDiv>
            <StyledH2>Edit User Info {`${props.state.userReducer.current ? props.state.userReducer.current.username : ""}`}</StyledH2>
            <StyledForm onSubmit={onSubmit}> 
                
            <label htmlFor="passwordInput">
                    Password
                </label>
                <StyledInput 
                     type="text" 
                     name="password" 
                     id="passwordinput" 
                     value={userData ? userData.password : ""}
                     onChange={onChange}
                 />
   
            <label htmlFor="speciesInput">
                    Phone Number
                </label>
                <StyledInput 
                     type="text" 
                     name="phone_number" 
                     id="phone_number_input" 
                     value={userData ? userData.phone_number : ""}
                     onChange={onChange}
                 />

                <StyledButton>
                    Edit User Info
                </StyledButton>
            </StyledForm>
        </StyledDiv>
    )
};

const mapStateToProps = (state) => {
   return {state};
 }

export default connect(mapStateToProps, {editUser, setCurrentUser})(EditUser);