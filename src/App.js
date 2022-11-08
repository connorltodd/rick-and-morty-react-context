import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Favourites from './components/Favourites/Favourites';
import SearchContextProvider from './contexts/SearchContext';
import FavouritesContextProvider from './contexts/FavouritesContext';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <FavouritesContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={
              <>
                <Navbar />
                <Homepage />
              </>
              }
              />
              <Route path='/favourites' element={ <Favourites />} />
            </Routes>
          </BrowserRouter>
        </SearchContextProvider>
      </FavouritesContextProvider>
    </div>
  );
}

export default App;
