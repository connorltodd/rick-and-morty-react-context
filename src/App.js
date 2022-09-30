import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import './App.css';

import SearchContextProvider from './contexts/SearchContext';
import Favorites from './components/Favorites/Favorites';
import FavoritesContextProvider from './contexts/FavoritesContext';

export default function App() {
 return (
   <div className="App">
    <BrowserRouter>
      <SearchContextProvider>
        <FavoritesContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoritesContextProvider>
      </SearchContextProvider>
    </BrowserRouter>
   </div>
 );
}
