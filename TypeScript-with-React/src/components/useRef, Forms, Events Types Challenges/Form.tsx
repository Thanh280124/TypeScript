import { FormEvent, useRef, useState } from "react"
type FormProps = {
  name: string,
  email: string,    
password: string
}

const Form = () => {
    const [submitData, setSubmitData] = useState<FormProps>({
        name: '',
        email: '',  
        password: ''
    })

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const submitInfor = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSubmitData({
            name: name.current!.value,
            email: email.current!.value,
            password: password.current!.value
        })}

  return (
    <div>
    <form onSubmit={submitInfor}>
        <input type="text" ref={name} placeholder="Enter your name" />
        <input type="email" ref={email} placeholder="Enter your email" />
        <input type="password" ref={password} placeholder="Enter your password" />
        <button type="submit">Submit</button>
        <h1>Show Information</h1>
    <div>Name: {submitData.name}</div>
    <div>Email: {submitData.email}</div>
    <div>Password: {submitData.password}</div>
    </form>
    </div>
  )
}

export default Form