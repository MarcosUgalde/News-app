import { useQuery } from "react-query"
import { searchs } from "../../services"
//import { useFetch } from "../../hooks"

function NewsPaper(url) {
    const { data, isLoading } = useQuery(['newspaper', url], () => searchs.getNewspaper(url))
    console.log('Data', data)
    const website = url.url
    console.log('Website: ', website)

    //const text = useFetch(website)
    if(isLoading) return <div>Loading...</div>
    return(
        <>
            <h3>{data.data[0]?.newspapers_name}</h3>
            
        </>
    )
}

export default NewsPaper