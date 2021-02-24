import { Route, Switch, Link } from "react-router-dom"

import "./store/requests"

import "./App.css"

import SatList from "./components/SatList"
import SearchBar from "./components/SearchBar"
import SatCard from "./components/SatCard"

require("dotenv").config()

function App() {
  return (
    <div className="App">
      <div className="Components-container">
        <header>
          <Link to="/" >Home</Link>
          <Link to="/details" >Details</Link>
        </header>
        <SearchBar />
        <div className="Sat-container">
          <Switch>
            <Route exact path="/" component={SatList} />
            <Route exact path="/details" component={SatCard} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
