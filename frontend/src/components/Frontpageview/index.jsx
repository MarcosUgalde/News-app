import Styled from './styles'
import SearchComponent from "../Search"

function Frontpageview({ url }) { 
    console.log('url que llega al Frontpagevie: ', url)
    

    return (
        <Styled.Body>
            <SearchComponent />
            <div>
                <iframe src={url} title='External site' width='500px' height='300px'></iframe>                
            </div>
        </Styled.Body>
    )
}

export default Frontpageview