import { styled } from "styled-components";

const Body = styled.section`
    font-family: 'Space Mono', monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: silver;

    h2 {
        font-size: 1.5em;
        color: #b1a625;
    }
`

const Blocks = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default {
    Body,
    Blocks,
}