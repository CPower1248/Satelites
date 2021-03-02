import { setState } from "react"
import { connect } from "react-redux"

import { getSatList_name } from "../../store/actions/listActions"

function SearchList({ name, country }) {
    const handleChange = (e) => {
        setState({
            [e.target.name]: e.target.value
        })
        console.log("NAME: ", name, "COUNTRY: ", country)
    }

    const handleSubmit_name = (e) => {
        e.preventDefault()
        getSatList_name()
        // resetSearch() // Build helper to reset search values
    }

    // handleSubmit_country() // Build submit for search by country
    const handleSubmit_country = (e) => {
        e.preventDefault()

        // !!!!! ===> START HERE <=== !!!!!
        
        // resetSearch() // Build helper to reset search values
    }

    return (
        <div className="SearchBar-a">
            <form className="SearchName" onSubmit={handleSubmit_name} >
                <input 
                    name="name" 
                    value={name} 
                    onChange={handleChange} 
                    placeholder="Get a list of satellites by name" 
                />
            </form>
            <form className="SearchCountry" onSubmit={handleSubmit_country} >
                <input 
                    name="country" 
                    value={country} 
                    onChange={handleChange} 
                    placeholder="Get a list of satellites by country" 
                />
            </form>
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

export default connect(mapStateToProps, { getSatList_name })(SearchList)
