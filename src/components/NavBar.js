import { NavLink, useHistory } from "react-router-dom"

function NavBar() {
    const { push } = useHistory()

    const handleNav_list = () => {
        push("/")
    }

    const handleNav_details = () => {
        push("/details")
    }

    return (
        <div className="NavBar">
            <div className="Nav-list" onClick={handleNav_list}>
                <NavLink to="/" >List</NavLink>
            </div>
            <div className="Nav-details" onClick={handleNav_details}>
                <NavLink to="/details" >Details</NavLink>
            </div>
        </div>
    )
}

export default NavBar
