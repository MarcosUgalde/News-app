import { useSearch } from "../SearchContext"

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