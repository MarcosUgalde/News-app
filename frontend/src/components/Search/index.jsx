import { useSearch } from "../SearchContext"
import { searchs } from "../../services";
import { useMutation } from "react-query";
import { useState } from "react";

function SearchComponent() {
    const [payload, setPayload] = useState()
    const { mutate } = useMutation(() => searchs.addSearch({ payload }, {onSuccess: (data) => {
        console.log(data)
    }}))

    const { searchTerm, setSearchTerm} = useSearch();

    const handleSearch = (e) => {
        setPayload({
            ...payload,
        })
        setSearchTerm(e.target.value)
    }

    return (
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search..." />
    )
}

export default SearchComponent