//import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

//REDUX
import { connect } from 'react-redux';
import { editPlant, deletePlant, setCurrent } from "../Actions/index";

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
    text-align: center;
    font-family: Cinzel, serif;
`

const StyledP = styled.p`
    text-align: center;
`

const Plant = styled.div`
    border: 1px solid #F9F9F9;
    margin: 1em;
    padding:.5em;

    button{
        margin: .5em;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const CardDisplay = (props) => {

   const history  = useHistory();

   const routeToEdit = (plantToEdit) => {
      props.setCurrent(plantToEdit)
      history.push(`/EditPlant/${plantToEdit.id}`)
   }

    return(
        <StyledDiv>
            <StyledH2>My Plants</StyledH2>
            <CardContainer>
                {props.state.plantsReducer.plants.map (item => {
                        return <Plant key={item.id}>
                            <StyledH3>{item.nickname}</StyledH3>
                            <StyledP>{item.species}</StyledP>
                            <StyledP>{item.h2o_frequency}</StyledP>
                            <button onClick={()=> routeToEdit(item) }>Edit Plant</button>
                            <button onClick={() => props.deletePlant(item.id)} >Remove Plant</button>
                        </Plant>  
                })}
            </CardContainer>
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
   return {state};
 }

export default connect( mapStateToProps, { editPlant, deletePlant, setCurrent} )(CardDisplay);