import { connect } from "react-redux"

function SearchBar({ searchSingle }) {


    return (
        <div className="SearchBar-container">
            <div className="SearchBar-title">
                <h1>Search for a satellite</h1>
            </div>
            <div className="SearchBar">
                <div className="SearchBar-a">
                    <div className="SearchNumber">
                        <input id="number" name="number" placeholder="Get details of a satellite by NORAD TLE number" />
                    </div>
                </div>
                <div className="SearchBar-b">
                    <div className="SearchName">
                        <input id="name" name="name" placeholder="Get a list of satellites by name" />
                    </div>
                    <div className="SearchCountry">
                        <input id="country" name="country" placeholder="Get a list of satellites by country" />
                    </div>
                </div>
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
