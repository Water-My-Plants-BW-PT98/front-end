import {Link} from "react-router-dom"
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #33261D;
`

const StyledH1 = styled.h1`
    font-family: Cinzel, serif;
    color: #72B01D;
`

const StyledNav = styled.nav`
    display: flex;
`
const StyledUL = styled.ul`
    display: flex;
    justify-content: space-between;
`

const StyledLI = styled.li`
    list-style: none;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
    padding: 5%;
    font-family: 'Fauna One', serif;
    color: #F9F9F9;
`

const Header = () => {

    return(
        <StyledDiv>
            <StyledH1>Water My Plants</StyledH1>
            <StyledNav>
                <StyledUL>
                    <Link to="/carddisplay">
                        <StyledLI>My Plants</StyledLI>
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/addplant">
                        <StyledLI>Add Plant</StyledLI>
                    </Link>
                </StyledUL>
            </StyledNav>
        </StyledDiv>
    )
}

export default Header