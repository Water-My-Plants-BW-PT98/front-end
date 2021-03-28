import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

//REDUX
import { connect } from 'react-redux';
import { } from "../Actions/index";

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
   console.log("STATE",props)

    return(
        <StyledDiv>
            <h2>My Plants</h2>
            <div>
                {props.state.plants.map (item => {
                        return <Plant key={item.id}>
                            <h3>{item.nickname}</h3>
                            <p>{item.species}</p>
                            <p>{item.h20Frequency}</p>
                            <button>Edit Plant</button>
                            <button>Remove Plant</button>
                        </Plant>  
                })}
            </div>
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
   return {state};
 }

export default connect( mapStateToProps, {} )(CardDisplay);