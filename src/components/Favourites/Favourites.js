import { useContext } from "react"
import { Link } from "react-router-dom";
import { FavouritesContext } from "../../contexts/FavouritesContext"
import '../Homepage/Homepage.css';


export default function Favourites (props) {
    const { favouriteCharacters, removeCharacterFromFavourites } = useContext(FavouritesContext);
    return (
        <div>
            <Link to='/'>View Homepage</Link>
            <div className="character-container">
                {favouriteCharacters.map(character => (
                    <div className="character-card">
                        <img className="character-card-image" src={character.image} alt="" />
                        <h1 className="character-card-name">{character.name}</h1>
                        <button onClick={() => removeCharacterFromFavourites(character)}>Remove from favourites</button>
                    </div>
                ))}
            </div>
        </div>
    )
}