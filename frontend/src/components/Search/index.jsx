import { useSearch } from "../SearchContext"
import { addSearch } from "../../services/searchs";

function SearchComponent() {
    const { data } = addSearch();
    console.log('addSearch service data: ', data)

    const { searchTerm, setSearchTerm} = useSearch();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
    )
}

export default SearchComponent