import styled from "styled-components";
import Link from "next/link";

const MainDiv = styled.div({
    backgroundColor: "black",
    color: "white"
});

const Header = () => {
    return (
        <MainDiv>
            <ul>
                <Link href="../Home">
                    <a>Home</a>
                </Link>
                <Link href="../Projects">
                    <a>Projects</a>
                </Link>
                <Link href="../Productivity">
                    <a>Productivity</a>
                </Link>
                <Link href="../Contact">
                    <a>Contact</a>
                </Link>
            </ul>
        </MainDiv>
    )
}
export default Header;