import { styled } from "styled-components";

const Body = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #707070;
    color: gold;
    height: 100vh;
`

const Form = styled.section`
    display: flex; 
    flex-direction: column;
    align-items: center;
`
const Item = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SubmitButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
`
export default {
    Body,
    Form,
    Item,
    SubmitButton,
}