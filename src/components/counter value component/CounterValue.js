import React, { useContext } from 'react'
import './CounterValue.css'
import CounterContext from '../../Context/CounterContext'

const CounterValue = () => {

    const { counter } = useContext(CounterContext)

    return (
        <div className="CounterValueBox">
            <p>Counter value  :</p>
            <p>{counter}</p>
        </div>
    )
}

export default CounterValue