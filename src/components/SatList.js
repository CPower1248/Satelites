import { useEffect } from "react"
import { connect } from "react-redux"
import { getSatList } from "../store/actions"

function SatList({ satList, isFetching, error, getSatList }) {
    useEffect(() => {
        getSatList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if (isFetching) {
        return <h2>Fetching Satellite List</h2>
    } else if (error) {
        return <h2>Err: {error}</h2>
    }

    return (
        <div className="SatList">
            {satList.map(item => {
                return (
                    <div className="SatList-item" key={item.number}>
                        <p>Name: {item.name}</p>
                        <p>Number: {item.number}</p>
                        <p>Country {item.country}</p>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        satList: state.satList,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps, { getSatList })(SatList)
