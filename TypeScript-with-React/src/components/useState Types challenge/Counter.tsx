import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState<number>(0)
  return (
    <section>
        <h2>Counter</h2>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </section>
  )
}

export default Counter