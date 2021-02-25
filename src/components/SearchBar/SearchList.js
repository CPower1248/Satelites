function SearchList() {
    return (
        <div className="SearchBar-a">
            <div className="SearchName">
                <input id="name" name="name" placeholder="Get a list of satellites by name" />
            </div>
            <div className="SearchCountry">
                <input id="country" name="country" placeholder="Get a list of satellites by country" />
            </div>
        </div>
    )
}

export default SearchList
