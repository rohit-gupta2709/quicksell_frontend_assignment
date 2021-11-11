import { useState, useEffect } from 'react';
import Counter from './components/counter component/Counter';
import CounterValue from './components/counter value component/CounterValue';
import axios from 'axios'
import CounterContext from './Context/CounterContext';

function App() {

  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [maxValue, setMaxValue] = useState(1000);

  useEffect(() => {

    const fetchCounter = async () => {

      const { data } = await axios.get(process.env.REACT_APP_GET_API)

      if (data == null) {
        setCounter(1);
        setMaxValue(1000);
      }
      else {
        setCounter(data);
        setMaxValue(data);
      }

    }

    fetchCounter();

  }, []);

  return (
    <CounterContext.Provider value={{
      counter: counter,
      setCounter: setCounter,
      loading: loading,
      setLoading: setLoading,
      maxValue: maxValue,
      setMaxValue: setMaxValue
    }}>
      <div className="App" >
        <Counter />
        <CounterValue />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
