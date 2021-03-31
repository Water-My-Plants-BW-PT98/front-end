import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
`

const StyledH1 = styled.h1`
    font-family: Cinzel, serif;
`

const StyledNav = styled.nav`
    display: flex;
`

const StyledButton = styled.button`
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    width: 100%;
    white-space: nowrap;
    text-align: center;
    border: none;
    font-family: 'Fauna One', serif;
`

const Header = () => {

    return(
        <StyledDiv>
            <StyledH1>Water My Plants</StyledH1>
            <StyledNav>
                <StyledButton>My Plants</StyledButton>
                <StyledButton>Add Plant</StyledButton>
            </StyledNav>
        </StyledDiv>
    )
}

export default Header