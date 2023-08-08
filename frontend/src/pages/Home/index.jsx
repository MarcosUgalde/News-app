import NewsPaper from "../../components/Newspaper"

function Home () {

    
    return (
        <>
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
                <NewsPaper url='theobjective.com/'/>
                <NewsPaper url='www.libertaddigital.com/'/>
            </div>
            <div>
                <h2>Internacional</h2>
                <NewsPaper url='www.economist.com/'/>
                <NewsPaper url='www.nytimes.com/'/>
                <NewsPaper url='www.washingtonpost.com/'/>
                <NewsPaper url='www.bbc.com'/>
            </div>
            <div></div>
        </>
    )
}

export default Home