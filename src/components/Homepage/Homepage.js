import React from "react";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../contexts/FavouritesContext";
import { SearchContext } from "../../contexts/SearchContext";
import './Homepage.css';

export default function Homepage () {
    const [characters, setCharacters] = React.useState([])
    const { characterSearch } = React.useContext(SearchContext)
    const { addCharacterToFavourites } = React.useContext(FavouritesContext)

    React.useEffect(() => {
        fetchCharacters()
    }, []);

    const fetchCharacters = () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }
    return (
        <div>
            <Link to='/favourites'>View my favourites</Link>
            <div className="character-container">
                {characters
                .filter(character => characterSearch !== '' ? 
                    character.name.toLowerCase().startsWith(characterSearch.toLowerCase()) ? character : null
                : 
                    character
                )
                .map(character => (
                    <div className="character-card">
                        <img className="character-card-image" src={character.image} alt="" />
                        <h1 className="character-card-name">{character.name}</h1>
                        <button onClick={() => addCharacterToFavourites(character)}>Add to favourites</button>
                    </div>
                ))}
            </div>
        </div>
    )
}