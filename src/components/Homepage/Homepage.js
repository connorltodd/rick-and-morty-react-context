import React from "react";
import './Homepage.css';
import { SearchContext } from "../../contexts/SearchContext";

export default function Homepage () {
    const [characters, setCharacters] = React.useState([])
    const { characterSearch } = React.useContext(SearchContext)

    React.useEffect(() => {
        fetchCharacters()
    }, []);

    const fetchCharacters = () => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }
    return (
        <div className="character-container">
            {/* <p>Character Search Value: {characterSearch}</p> */}
            {characters
            .filter(character => characterSearch.length > 0 ? 
                character.name.toLowerCase().includes(characterSearch.toLowerCase()) ? character : null
                :
                character
            )
            .map(character => (
                <div className="character-card">
                    <img className="character-card-image" src={character.image} alt="" />
                    <h1 className="character-card-name">{character.name}</h1>
                </div>
            ))}
        </div>
    )
}