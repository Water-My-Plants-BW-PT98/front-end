//import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

//REDUX
import { connect } from 'react-redux';
import { editPlant, deletePlant } from "../Actions/index";

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

const StyledH3 = styled.h3`
    font-family: Cinzel, serif;
`

const Plant = styled.div`
    border: 1px solid #F9F9F9;
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
            <StyledH2>My Plants</StyledH2>
            <div>
                {props.state.plantsReducer.plants.map (item => {
                        return <Plant key={item.id}>
                            <StyledH3>{item.nickname}</StyledH3>
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