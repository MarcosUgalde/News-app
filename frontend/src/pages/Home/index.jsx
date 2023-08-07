//crea un comonente que puedas usar repetidamente en esta página
//a ese componente le pasas la info de un periódico cada vez
import { useUrl } from "../../hooks/useUrl"
function Home () {
    const url = useUrl()
    console.log(url)
    
    return (
        <>
            <h1>This is home page</h1>
        </>
    )
}

export default Home