import { connect } from "react-redux"

function SearchCard({ number }) {
    return (
    <div className="SearchBar-b">
            <div className="SearchNumber">
                <input id="number" name="number" placeholder="Get details of a satellite by NORAD TLE number" />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        search: {
            number: state.search.number
        }
    })
}

export default connect(mapStateToProps, {})(SearchCard)
