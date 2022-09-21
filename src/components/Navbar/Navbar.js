import Searchbar from '../Searchbar';
import './Navbar.css';

export default function Navbar () {
    return (
        <div className='navbar'>
            <h1>Rick and Morty Search App</h1>
            <Searchbar />
        </div>
    )
}