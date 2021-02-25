import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"

import SearchList from "./SearchList"
import SearchCard from "./SearchCard"

function SearchBar({ number, name, country }) {


    return (
        <div className="SearchBar-container">
            <div className="SearchBar-title">
                <h1>Search for a satellite</h1>
            </div>
            <div className="SearchBar">
                <Switch>
                    <Route exact path="/" component={SearchList}/>
                    <SearchCard exact path="/details" component={SearchCard}/>
                </Switch>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return ({
        search: {
            number: state.search.number,
            name: state.search.name,
            country: state.search.country
        }
    })
}

export default connect(mapStateToProps, {})(SearchBar)
