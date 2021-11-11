import React, { useContext, useEffect, useState } from 'react'
import Loader from '../../utilities/Loader'
import './Counter.css'
import CounterContext from '../../Context/CounterContext'
import axios from 'axios'

const Counter = () => {

    const { counter, setCounter, maxValue, setLoading } = useContext(CounterContext)
    const [localCounter, setLocalCounter] = useState(counter)
    const [isMax, setIsMax] = useState("pointer")

    useEffect(() => {
        setLocalCounter(counter)

        if (counter >= maxValue)
            setIsMax("disabled")
        else
            setIsMax("pointer")

    }, [counter, maxValue])

    const CounterUpdate = async (local) => {

        if (local > maxValue)
            return;

        setLoading(true)
        setCounter(local)

        await axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', {
            "rohit_gupta": local
        })

        setLoading(false)

    }

    const userInput = (event) => {
        event.preventDefault()
        CounterUpdate(Number(event.target[0].value))
    }

    const decreaseCounter = () => {
        CounterUpdate(Number(counter) - 1)
    }

    const increaseCounter = () => {
        CounterUpdate(Number(counter) + 1)
    }


    return (
        <div className="counterBox">
            <Loader />
            <div className="counterDisplay">
                <div id="btn1" onClick={decreaseCounter}>-</div>
                <form onSubmit={(event) => userInput(event)}>
                    <input type="number" id="middle" max={maxValue} value={localCounter} onChange={(event) => setLocalCounter(event.target.value)} />
                </form>
                <div id="btn2" className={isMax} onClick={increaseCounter}>+</div>
            </div>
        </div>
    )
}

export default Counter
