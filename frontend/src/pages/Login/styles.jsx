import { styled } from "styled-components";

const Body = styled.section`
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
    SubmitButton,
}