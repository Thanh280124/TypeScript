import { useRef } from "react"


const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const focusInput = () => {
        inputRef.current?.focus()
    }
  return (
    <div>
      <input type="text" placeholder="need to be focus now" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default FocusInput
