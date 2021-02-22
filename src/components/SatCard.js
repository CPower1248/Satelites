import { useEffect } from "react"
import { connect } from "react-redux"
import { getSatByNumber } from "../store/actions"

function SatCard({ satCard, isFetchingCard, errorCard, getSatByNumber }) {
    console.log(satCard)
    useEffect(() => {
        getSatByNumber()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isFetchingCard) {
        return <h2>Fetching Satellite Card</h2>
    } else if (errorCard) {
        return <h2>Err: {errorCard}</h2>
    }

    return (
        <div className="SatCard-container">
            <h1>Satellite Details</h1>
            <div className="SatCard">
                <div className="SatCard-key">
                    <p>Name: </p>
                </div>
                <div className="SatCard-value">
                    <p>{satCard.name}</p>
                </div>
                <div className="SatCard-key">
                    <p>Number: </p>
                </div>
                <div className="SatCard-value">
                    <p>{satCard.number}</p>
                </div>
                <div className="SatCard-key">
                    <p>Country: </p>
                </div>
                <div className="SatCard-value">
                    <p>{satCard.country}</p>
                </div>
                <div className="SatCard-key">
                    <p>Orbital Period: </p>
                </div>
                <div className="SatCard-value">
                    <p>{satCard.orbital_period}</p>
                </div>
                <div className="SatCard-key">
                    <p>Type: </p>
                </div>
                <div className="SatCard-value">
                    <p>{satCard.type}</p>
                </div>
                <div className="SatCard-key">
                    <p>Launch Date: </p>
                </div>
                <div className="SatCard-value">
                    <p>{satCard.launch_date}</p>
                </div>
                <div className="SatCard-key-learn-more">
                    <p>Learn More: </p>
                </div>
                {!satCard.links ? <p>No Links Available</p> : 
                satCard.links.map(item => {
                    return (
                        <div className="SatCard-link-item" key={item.link_url}>
                            <a href={item.link_url} target="_blank" rel="noreferrer">
                                <div className="SatCard-link-item-key">
                                    <p>{item.link_name}</p>    
                                </div>
                                <div className="SatCard-link-item-value">
                                    <p>{item.link_url}</p>
                                </div>
                            </a>
                        </div>
                    )
                })}
                <div className="SatCard-key-description">
                    <p>Description: </p>
                </div>
                <div className="SatCard-value-description">
                    {satCard.description}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        satCard: state.satCard,
        isFetchingCard: state.isFetchingCard,
        errorCard: state.errorCard
    })
}

export default connect(mapStateToProps, { getSatByNumber })(SatCard)
