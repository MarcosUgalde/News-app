import Styled from './styles'
import  { useUser } from '../../hooks/useUser'

const NavBar = () => {
    const { data } = useUser()
    
    return (
        <Styled.Nav>
            {data.username}
        </Styled.Nav>    
    )
}

export default NavBar