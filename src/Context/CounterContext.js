import { createContext } from 'react'

const CounterContext = createContext({
    counter: 1,
    setCounter: () => { },
    userCounter: 1,
    setUserCounter: () => { },
    maxValue: 1000,
    setMaxValue: () => { },
    loading: false,
    setLoading: () => { }
})

export default CounterContext