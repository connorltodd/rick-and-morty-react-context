import React from "react"
import { Link } from "react-router-dom";
import { SearchContext } from "../../contexts/SearchContext"
import './Navbar.css';

export default function Searchbar () {
   const { handleCharacterSearch } = React.useContext(SearchContext)
   return (
       <div>
        <Link to="/">home</Link>
        <Link to="/favorites">Favorites</Link>
           <input
               onChange={(event) => handleCharacterSearch(event.target.value)}
               type='text'
               placeholder="search for a character"
           />
       </div>
   )
}
