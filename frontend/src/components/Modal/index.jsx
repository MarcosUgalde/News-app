import Styled from './styles'
import { useLogout } from "../../hooks/useLogout"

const Modal = ({ handleModal }) => {
    const handleLogout = useLogout()

    return (
        <Styled.Body>
            <p>You are about to logout</p>
            <p>Are you sure?</p>
            <Styled.Yes onClick={handleLogout}>Yes</Styled.Yes>
            <Styled.No onClick={() => handleModal(false)}>No</Styled.No>
        </Styled.Body>
    )
}

export default Modal