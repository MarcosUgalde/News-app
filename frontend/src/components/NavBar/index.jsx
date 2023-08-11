import Styled from './styles'
import  { useUser } from '../../hooks/useUser'

const NavBar = () => {
    const { data } = useUser()
    console.log(data)
    return (
        <Styled.Nav>
            Hola
        </Styled.Nav>    
    )
}

export default NavBar