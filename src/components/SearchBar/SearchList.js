import { connect } from "react-redux"

function SearchList({ name, country }) {
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

const mapStateToProps = state => {
    return ({
        search: {
            name: state.search.name,
            country: state.search.country
        }
    })
}

export default connect(mapStateToProps, {})(SearchList)
