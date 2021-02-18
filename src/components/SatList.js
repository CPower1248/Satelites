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
            <p id="SatList-p">Satellite List:</p>
            {satList.map(item => {
                return (
                    <div className="SatList-item">
                        <div className="SatList-item-key">
                            <p>Name: </p>
                        </div>
                        <div className="Divider">
                            <p>-</p>
                        </div>
                        <div className="SatList-item-value">
                            <p>{item.name}</p>
                        </div>
                        <div className="SatList-item-key">
                            <p>Number: </p>
                        </div>
                        <div className="Divider">
                            <p>-</p>
                        </div>
                        <div className="SatList-item-value">
                            <p>{item.number}</p>
                        </div>
                        <div className="SatList-item-key">
                            <p>Country: </p>
                        </div>
                        <div className="Divider">
                            <p>-</p>
                        </div>
                        <div className="SatList-item-value">
                            <p>{item.country}</p>
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
