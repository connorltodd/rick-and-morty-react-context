import { useState, createContext } from "react";

export const SearchContext = createContext();

export default function SearchContextProvider (props) {
    const [characterSearch, setCharacterSearch] = useState('')

    const handleCharacterSearch = (searchValue) => setCharacterSearch(searchValue)

    return (
        <SearchContext.Provider value={{ characterSearch, handleCharacterSearch}}>
            {props.children}
        </SearchContext.Provider>
    )
}