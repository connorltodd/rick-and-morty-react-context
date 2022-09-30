import React from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';
export default function Favorites () {
    const { favorites, removeFromFavorites } = React.useContext(FavoritesContext);
    return (
        <div>
            <h1>Favorites</h1>
            {favorites.map(favorite => (
                 <div className="character-card">
                 <img className="character-card-image" src={favorite.image} alt="" />
                 <h1 className="character-card-name">{favorite.name}</h1>
                 <button onClick={() => removeFromFavorites(favorite)}>Remove From Favorites</button>
             </div>
            ))}
        </div>
    )
}