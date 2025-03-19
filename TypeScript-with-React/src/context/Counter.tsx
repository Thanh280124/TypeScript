import { useContext } from "react"
import { Mycontext } from "./Mycontext"
const Counter = () => {
    const {count, increment,decrement} = useContext(Mycontext)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter
