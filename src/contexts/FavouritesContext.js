import { useState, createContext }  from 'react';

export const FavouritesContext = createContext();

export default function FavouritesContextProvider (props) {
    const [favouriteCharacters, setFavouriteCharacters] = useState([]);

    const addCharacterToFavourites = (characterToAdd) => {
        setFavouriteCharacters([...favouriteCharacters, characterToAdd])
    }

    const removeCharacterFromFavourites = (characterToRemove) => {
        const newCharactersList = favouriteCharacters.filter(character => character.id !== characterToRemove.id);
        setFavouriteCharacters(newCharactersList)
    }

    return (
        <FavouritesContext.Provider value={{ favouriteCharacters, addCharacterToFavourites, removeCharacterFromFavourites }}>
            {props.children}
        </FavouritesContext.Provider>
    )
}
