import { useState } from "react"
import { connect } from "react-redux"

import { getSatList_name, getSatList_country } from "../../store/actions/listActions"

const initialUserInput = {
    name: "",
    country: ""
}

function SearchList({ name, country, getSatList_name, getSatList_country }) {
    const [userInput, setUserInput] = useState(initialUserInput)
    
    const handleChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit_name = (e) => {
        e.preventDefault()
        console.log("HERE FROM SEARCHBAR")
        getSatList_name(userInput.name)
        setUserInput({name: "", country: ""})
    }

    const handleSubmit_country = (e) => {
        e.preventDefault()
        getSatList_country(userInput.country)
        setUserInput({name: "", country: ""})
        
        // resetSearch() // Build helper to reset search values
    }

    return (
        <div className="SearchBar-a">
            <form className="SearchName" onSubmit={handleSubmit_name} >
                <input 
                    name="name" 
                    value={userInput.name} 
                    onChange={handleChange} 
                    placeholder="Get a list of satellites by name" 
                />
                <button>Search Name</button>
            </form>
            <form className="SearchCountry" onSubmit={handleSubmit_country} >
                <input 
                    name="country" 
                    value={userInput.country} 
                    onChange={handleChange} 
                    placeholder="Get a list of satellites by country" 
                />
                <button>Search Country</button>
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

export default connect(mapStateToProps, { getSatList_name, getSatList_country })(SearchList)
