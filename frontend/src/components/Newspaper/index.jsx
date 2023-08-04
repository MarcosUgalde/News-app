import { useQuery } from "react-query"
import { searchs } from "../../services"

function NewsPaper() {
    //falta coger la url. Crear un hook para ello
    const { data, isLoading } = useQuery(url, () => searchs.getNewspaper(url))
    console.log(data)

    return(
        <>
            Este componente mostrará la información de la portada de los periódicos
        </>
    )
}

export default NewsPaper