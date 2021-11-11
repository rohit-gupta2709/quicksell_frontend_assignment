import React, { useContext } from 'react'
import './Loader.css'
import CounterContext from '../Context/CounterContext'

const Loader = () => {

    const { loading } = useContext(CounterContext)

    let hidden = "loader"

    if (!loading) {
        hidden = "loader loaderBox"
    }
    else {
        hidden = "loader"
    }

    return (
        <div className={hidden}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <p id="loader-text">Saving counter value</p>
        </div>
    )
}

export default Loader
