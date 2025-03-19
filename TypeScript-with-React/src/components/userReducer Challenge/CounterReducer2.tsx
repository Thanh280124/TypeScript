import { useReducer } from "react"
import { CounterState } from "./counterReducer"
import { conterReducer } from "./counterReducer"

const initialState: CounterState = {count: 0}

const CounterReducer2 = () => {
   const [state,dispatch] = useReducer(conterReducer, initialState)
   const increment = () => dispatch({type: 'INCREMENT'})
   const decrement = () => dispatch({type: 'DECREMENT'})
  return (
    <div>
      
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>IN</button>
      <button onClick={decrement}>DE</button>
    </div>
  )
}

export default CounterReducer2
