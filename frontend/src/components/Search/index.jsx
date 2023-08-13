import { useSearch } from "../SearchContext"
import { searchs } from "../../services";
import { useMutation } from "react-query";

function SearchComponent() {
    

    const { searchTerm, setSearchTerm} = useSearch();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
    )
}

export default SearchComponent