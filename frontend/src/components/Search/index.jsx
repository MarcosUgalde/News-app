import { useSearch } from "../SearchContext"
import { searchs } from "../../services";
import { useMutation } from "react-query";
import { useState } from "react";

function SearchComponent() {
    const { searchTerm, setSearchTerm} = useSearch();
    
    const [payload, setPayload] = useState({ searchTerm: ''});
    
    const handleSearch = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm)
        setPayload({
            ...payload,
            searchTerm: newSearchTerm,
        })
    }

    const { mutate } = useMutation(() => searchs.addSearch(payload))

    const handleSubmit= (e) => {
        e.preventDefault();
        mutate();
    }

    return (
        <form on onSubmit={handleSubmit}>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchComponent