import { useLogout } from "../../hooks/useLogout"

const Modal = ({ handleModal }) => {
    const handleLogout = useLogout()

    return (
        <>
            <p>You are about to logout</p>
            <p>Are you sure?</p>
            <button onClick={handleLogout}>Yes</button>
            <button onClick={() => handleModal(false)}>No</button>
        </>
    )
}

export default Modal