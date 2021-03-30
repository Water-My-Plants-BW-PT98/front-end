import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

//REDUX
import { connect } from 'react-redux';
import { editPlant, deletePlant } from "../Actions/index";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Plant = styled.div`
   border: 1px solid black;
   margin: 1em;
   padding:.5em;

   button{
      margin: .5em;
   }
`;

const CardDisplay = (props) => {

   const history  = useHistory();

   const routeToEdit = (itemId) => {
      history.push(`/EditPlant/${itemId}`)
   }

    return(
        <StyledDiv>
            <h2>My Plants</h2>
            <div>
                {props.state.plantsReducer.plants.map (item => {
                        return <Plant key={item.id}>
                            <h3>{item.nickname}</h3>
                            <p>{item.species}</p>
                            <p>{item.h2o_frequency}</p>
                            <button onClick={()=> routeToEdit(item.id) }>Edit Plant</button>
                            <button onClick={() => props.deletePlant(item.id)} >Remove Plant</button>
                        </Plant>  
                })}
            </div>
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
   return {state};
 }

export default connect( mapStateToProps, { editPlant, deletePlant} )(CardDisplay);