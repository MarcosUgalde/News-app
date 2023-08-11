import  { useUser } from '../../hooks/useUser'

const NavBar = () => {
    const { data } = useUser()
    
    return (
            {data}
    )
}

export default NavBar