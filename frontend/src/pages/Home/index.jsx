import NewsPaper from "../../components/Newspaper"
import Styled from './styles'

function Home () {
    return (
        <Styled.Body>
            <h1>This is home page</h1>
            <div>
                <h2>Nacional</h2>
                <NewsPaper url='elpais.com/'/>
                <NewsPaper url='www.elmundo.es/'/>
                <NewsPaper url='www.abc.es/'/>
                <NewsPaper url='www.larazon.es/'/>
                <NewsPaper url='www.eldiario.es/'/>
                <NewsPaper url='www.publico.es/'/>
                <NewsPaper url='www.lavanguardia.com/'/>
                <NewsPaper url='www.20minutos.es/'/>
                <NewsPaper url='www.ultimahora.es/'/>
                <NewsPaper url='www.libertaddigital.com/'/>
            </div>
            <div>
                <h2>Internacional</h2>
                <NewsPaper url='www.economist.com/'/>
                <NewsPaper url='www.nytimes.com/'/>
            </div>
            <div></div>
        </Styled.Body>
    )
}

export default Home