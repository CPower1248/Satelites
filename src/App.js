import "./store/requests"

import "./App.css"

import SatList from "./components/SatList"
import SearchBar from "./components/SearchBar"
import SatCard from "./components/SatCard"

function App() {
  return (
    <div className="App">
      <header>
        <span>-Satellites App-</span>
      </header>
      <div className="Components-container">
        <SatCard />
        <SearchBar />
        <SatList />
      </div>
    </div>
  );
}

export default App;
