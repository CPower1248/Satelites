import { Route, Switch } from "react-router-dom"

import "./store/requests"

import "./App.css"

import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar/SearchBar"
import SatList from "./components/SatList"
import SatCard from "./components/SatCard"

require("dotenv").config()

function App() {
  return (
    <div className="App">
        <header>
          
        </header>
        <NavBar />
        <SearchBar />
        <div className="Sat-container">
          <Switch>
            <Route exact path="/" component={SatList} />
            <Route exact path="/details" component={SatCard} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
