import "./store/requests"

import "./App.css"

import SatList from "./components/SatList"
import SearchBar from "./components/SearchBar"
import SatCard from "./components/SatCard"

function App() {
  return (
    <div className="App">
      <div className="Components-container">
        <header>
          <span>-Satellites App-</span>
        </header>
        <SearchBar />
        <div className="Sat-container">
          <SatCard />
          <SatList />
        </div>
      </div>
    </div>
  );
}

export default App;
