import "./App.css"

import SatList from "./components/SatList"

function App() {
  return (
    <div className="App">
      <header>
        <span>-Satellites App-</span>
      </header>
      <div className="Components-container">
        <SatList />
      </div>
    </div>
  );
}

export default App;
