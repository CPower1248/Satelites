import { Requests as Reqs } from "../store/requests"

function SearchBar() {
    return (
        <div className="SearchBar-container">
                <h1>Search for a satellite</h1>
                <input name="SingleSearch" placeholder="Search for a satellite by name or number" />
        </div>

    )
}

export default SearchBar
