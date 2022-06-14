import styled from "styled-components";

const MainDiv = styled.div({
    backgroundColor: "grey" ,
    display:"flex",
    justifyContent: "center"
});

const MainUl = styled.ul({
    display:"flex",
})

const MainLi = styled.li({
    listStyle: "none",
    padding: "1rem",
    
})

const Footer = () => {
    return(
        <MainDiv>
            <MainUl>
                <MainLi><a href="">Linkedin</a></MainLi>
                <MainLi><a href="">Github</a></MainLi>
                <MainLi><a href="">Twitter</a></MainLi>
            </MainUl>
        </MainDiv>
    )
}
export default Footer;