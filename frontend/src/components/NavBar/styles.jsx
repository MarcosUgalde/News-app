import { styled } from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    gap: 1.5rem;
    background: linear-gradient(90deg, rgba(138,138,138,1) 0%, rgba(180,180,180,1) 50%, rgba(204,204,204,1) 100%);
`

const User = styled.span`
    color: blue;
    cursor: pointer;

    &:hover {
        color: white;
    }
`

export default {
    Nav,
    User,
}