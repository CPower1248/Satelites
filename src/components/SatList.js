import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchSatList, fetchSatByNumber } from "../store/actions"

function SatList({ satList, isFetchingList, errorList, number, fetchSatList, fetchSatByNumber }) {
    useEffect(() => {
        fetchSatList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if (isFetchingList) {
        return <h2>Fetching Satellite List</h2>
    } else if (errorList) {
        return <h2>Err: {errorList}</h2>
    }

    return (
        <div className="SatList-container">
            <div className="SatList-search">
                <h1>Satellite List</h1>
            </div>
            <div className="SatList-items-container">
                {satList.map(item => {
                    return (
                        <div className="SatList-item" key={item.number}>
                            <div className="SatList-item-key">
                                <p>Name: </p>
                            </div>
                            <div className="SatList-item-value">
                                <p>{item.name}</p>
                            </div>
                            <div className="SatList-item-key">
                                <p>Number: </p>
                            </div>
                            <div className="SatList-item-value">
                                <p>{item.number}</p>
                            </div>
                            <div className="SatList-item-key">
                                <p>Country: </p>
                            </div>
                            <div className="SatList-item-value">
                                <p>{item.country}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        counter: state.counter,
        initialFetch: state.initialFetch,
        satList: state.satList,
        isFetchingList: state.isFetchingList,
        errorList: state.errorList,
        search: {
            number: state.search.number
        }
    })
}

export default connect(mapStateToProps, { fetchSatList, fetchSatByNumber })(SatList)
