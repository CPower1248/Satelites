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
            <h2>All Satellites</h2>
            {satList.map(item => {
                return (
                    <div className="SatList-item">
                        <div className="SatList-item-key" key={item.number}>
                            <p>Name: </p>
                            <p>Number: </p>
                            <p>Country: </p>
                            <p>Classification: </p>
                            <p>Size: </p>
                            <p>Type: </p>
                        </div>
                        <div className="SatList-item-value" >
                            <p>{item.name}</p>
                            <p>{item.number}</p>
                            <p>{item.country}</p>
                            <p>{item.classification}</p>
                            <p>{item.size}</p>
                            <p>{item.type}</p>
                        </div>
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
