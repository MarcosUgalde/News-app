import { useSearch } from "../SearchContext"
import { searchs } from "../../services";
import { useMutation } from "react-query";
import { useState } from "react";

function SearchComponent() {
    const { text, setText } = useSearch();
    
    const [payload, setPayload] = useState({ text: ''});
    
    const handleSearch = (e) => {
        const newSearchTerm = e.target.value;
        setText(newSearchTerm)
        setPayload((prevPayload) => ({
            ...prevPayload,
            text: newSearchTerm,
        }))
    }

    const { mutate } = useMutation(() => searchs.addSearch(payload))
    console.log('Payload: ', payload)

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log('Payload before mutate:', payload);
        mutate();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleSearch} placeholder="Search..." />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchComponent