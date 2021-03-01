import { Switch, Route } from "react-router-dom"

import SearchList from "./SearchList"
import SearchCard from "./SearchCard"

function SearchBar() {
    return (
        <div className="SearchBar-container">
            <div className="SearchBar-title">
                <h1>Search for a satellite</h1>
            </div>
            <div className="SearchBar">
                <Switch>
                    <Route exact path="/" component={SearchList}/>
                    <Route exact path="/details" component={SearchCard}/>
                </Switch>
            </div>
        </div>

    )
}

export default SearchBar
