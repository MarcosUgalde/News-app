const Modal = ({ handleModal }) => {
    return (
        <>
            <p>You are about to logout</p>
            <p>Are you sure?</p>
            <button>Yes</button>
            <button onClick={() => handleModal(false)}>No</button>
        </>
    )
}

export default Modal