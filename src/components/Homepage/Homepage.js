import React from "react";
import './Homepage.css';
import { SearchContext } from "../../contexts/SearchContext";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export default function Homepage () {
    const [characters, setCharacters] = React.useState([]);
    const [pageNumber, setPageNumber] = React.useState(1);
    const { characterSearch } = React.useContext(SearchContext);
    const { addToFavorites } = React.useContext(FavoritesContext);

    React.useEffect(() => {
        fetchCharacters()
    }, []);

    React.useEffect(() => {
        fetchCharacters()
    }, [pageNumber])   

    const handlePagination = (value) => {
        setPageNumber(
            (currentPageNumber) => {
                if(value === 'increase') {
                    return currentPageNumber += 1;
                } else if (value === 'decrease') {
                    return currentPageNumber -= 1;
                }
            }
        )
    }

   

    // React pagination
    // store the page number inside the state
    // forward and backward buttons
    // if the user is on page 1 hide the back buttons (conditional rendering)
    // if the user is on page 42 hide the forward buttons (conditional rendering)
    // a function that can increase or decrease the page number depending upon which button was clicked
    // we need a way to react to the page number change so we 
    // can fetch the new list of characters (e.g page 2 characters) (componentDidUpdate)

    const fetchCharacters = () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }
    return (
        <div> 
            {/* Decrease button */}
            {pageNumber > 1 ? <button onClick={() => handlePagination('decrease')}>{'<'}</button> : null}
            <p>Page {pageNumber}</p>
            {/* Increase button */}
            {pageNumber < 42 ? <button onClick={() => handlePagination('increase')}>{'>'}</button> : null}
        
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
                    <button onClick={() => addToFavorites(character)}>Add To Favorites</button>
                </div>
            ))}
        </div>
        </div>
    )
}