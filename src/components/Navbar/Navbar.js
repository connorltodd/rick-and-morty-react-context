import React from "react"
import './Navbar.css';

import { SearchContext } from "../../contexts/SearchContext"
export default function Searchbar () {
   const { handleCharacterSearch } = React.useContext(SearchContext)
   return (
       <div>
           <input
               onChange={(event) => handleCharacterSearch(event.target.value)}
               type='text'
               placeholder="search for a character"
           />
       </div>
   )
}
