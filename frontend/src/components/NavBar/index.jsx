import Styled from './styles'
import  { useUser } from '../../hooks/useUser'
import { useState } from 'react'
import Modal from '../Modal'

const NavBar = () => {
    const { data } = useUser();
    const [showModal, setShowModal] = useState(false)

    if(showModal) return <Modal handleModal={setShowModal}/>

    return (
        <Styled.Nav>
            <Styled.User onClick={() => setShowModal(true)}>
                {data?.username}
            </Styled.User>
        </Styled.Nav>    
    )
}

export default NavBar