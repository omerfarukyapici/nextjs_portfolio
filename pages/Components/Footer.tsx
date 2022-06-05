import styled from "styled-components";

const MainDiv = styled.div({
    backgroundColor: "blue" 
});

const Footer = () => {
    return(
        <MainDiv>
            <ul>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Github</a></li>
                <li><a href="">Twitter</a></li>
            </ul>
        </MainDiv>
    )
}
export default Footer;