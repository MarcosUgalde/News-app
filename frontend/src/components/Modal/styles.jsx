import { styled } from "styled-components";

const Body = styled.section`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
    position: absolute;
    background-color: white;
    height: 200px;
    width: 300px;
`

const Yes = styled.button`
    border-radius: 15px;
    border: 0px;
    height: 2em;
    width: 3em;

    &:hover {
        background-color: red;
        color: white;
    }
`
const No = styled.button`
    border-radius: 15px;
    border: 0px;
    height: 2em;
    width: 3em;
    
    &:hover {
        background-color: #5bfa03;
        color: white;
    }
`

export default {
    Body,
    Yes,
    No,
}