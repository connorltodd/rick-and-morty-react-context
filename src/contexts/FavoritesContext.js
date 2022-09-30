import { useState, createContext } from "react";

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props) {
   const [favorites, setFavorites] = useState([]);

   const addToFavorites = (newFavorite) => {
        // check to see if character exists in array
        const doesCharacterExistInFavorites = favorites.find(favorite => favorite.id === newFavorite.id);
        console.log(doesCharacterExistInFavorites)
        // if it does not exist add it to the array
        if(!doesCharacterExistInFavorites) {
            setFavorites([...favorites, newFavorite])
        }
   }

   const removeFromFavorites = (favoriteToBeRemoved) => {
    const newFavoriteList = favorites.filter(favorite => favorite.id !== favoriteToBeRemoved.id)
    setFavorites(newFavoriteList)
   }
   
    return (
     <FavoritesContext.Provider value={
        {favorites, addToFavorites, removeFromFavorites}
    }>
       {props.children}
     </FavoritesContext.Provider>
   );
 }