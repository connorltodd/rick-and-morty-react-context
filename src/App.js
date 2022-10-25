import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import SearchContextProvider from './contexts/SearchContext';

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <Navbar />
        <Homepage />
      </SearchContextProvider>
    </div>
  );
}

export default App;
