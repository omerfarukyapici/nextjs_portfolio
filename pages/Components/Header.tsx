import styled from "styled-components";
import Link from "next/link";

/* Styled Components w/elements */
const H_Section = styled.section`
    display: flex;
    justify-content: center;
    background-color: red;
`
const H_Div = styled.div`
    background-color: yellow;
    width:  1200px;
`
const H_Parent = styled.div`
    display: flex;
    justify-content: space-between;
`
const H_Link = styled.div`
    margin: 1.5rem;
`
const H_Logo = styled.div`
    background-color: blue;
`
const H_Pages = styled.div`
    background-color: purple;
    display: flex;
`

const Header = () => {
    return (
        <H_Section>
            <H_Div>
                <H_Parent>

                    <H_Logo>
                        <H_Link>
                            <Link href="../Home">
                                <a>Home</a>
                            </Link>
                        </H_Link>
                    </H_Logo>

                    <H_Pages>
                        <H_Link>
                            <Link href="../Projects">
                                <a>Projects</a>
                            </Link>
                        </H_Link>
                        <H_Link>
                            <Link href="../Productivity">
                                <a>Productivity</a>
                            </Link>
                        </H_Link>
                        <H_Link>
                            <Link href="../Contact">
                                <a>Contact</a>
                            </Link>
                        </H_Link>
                    </H_Pages>

                </H_Parent>
            </H_Div>
        </H_Section>
    )
}
export default Header;