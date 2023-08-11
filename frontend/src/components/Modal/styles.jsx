import { styled } from "styled-components";

const Body = styled.section`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 25vh;;
    left: 25vW; 
    background-color: white;
    border-radius: 5px;
    height: 400px;
    width: 600px;
    `
    
const Text = styled.p`
    font-family: 'Turret Road', cursive;
`

const Yes = styled.button`
    border-radius: 15px;
    border: 0px;
    height: 3em;
    width: 5em;
    font-family: 'Turret Road', cursive;

    &:hover {
        background-color: red;
        color: white;
    }
`
const No = styled.button`
    border-radius: 15px;
    border: 0px;
    height: 3em;
    width: 5em;
    font-family: 'Turret Road', cursive;
    
    &:hover {
        background-color: #5bfa03;
        color: white;
    }
`

export default {
    Body,
    Text,
    Yes,
    No,
}