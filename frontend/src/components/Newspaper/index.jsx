import Styled from './styles'
import { useQuery } from "react-query"
import { searchs } from "../../services"
import Frontpageview from "../Frontpageview"

function NewsPaper(url) {
    const { data, isLoading } = useQuery(['newspaper', url], () => searchs.getNewspaper(url))
    console.log('Data', data)
    console.log('url.url: ', url.url)
    const website = url.url
    console.log('Website: ', website)
    const completeWebSite = 'https://' + website;

    if(isLoading) return <div>Loading...</div>
    return(
        <Styled.Section>
            <h3>{data?.data[0]?.newspapers_name}</h3>
            <div>
                <Frontpageview url={data?.data[0]?.web_url}/>
            </div>
            <p>Visit web site here: <a href={completeWebSite}>{website}</a></p>
        </Styled.Section>
    )
}

export default NewsPaper