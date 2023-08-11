import Styled from './styles'
import { useLogout } from "../../hooks/useLogout"

const Modal = ({ handleModal }) => {
    const handleLogout = useLogout()

    return (
        <Styled.Body>
            <Styled.Text>You are about to logout</Styled.Text>
            <Styled.Text>Are you sure?</Styled.Text>
            <Styled.Yes onClick={handleLogout}>Yes</Styled.Yes>
            <Styled.No onClick={() => handleModal(false)}>No</Styled.No>
        </Styled.Body>
    )
}

export default Modal