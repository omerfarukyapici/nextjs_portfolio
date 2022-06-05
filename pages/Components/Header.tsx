import styled from "styled-components";

const MainDiv = styled.div({
    backgroundColor: "red" 
});

const Header = () => {
    return(
        <MainDiv>
            <ul>
                <li>
                    <a href="../Me">Me(Home) page</a>
                </li>
                <li>
                    <a href="../Projects">Project page</a>                    
                </li>
            </ul>
        </MainDiv>
    )
}
export default Header;