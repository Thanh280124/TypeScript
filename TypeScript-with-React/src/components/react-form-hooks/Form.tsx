import { SubmitHandler, useForm } from "react-hook-form"
interface FormValues {
    name: string;
    email: string;
    password: string;
}
const Form = () => {
    const {
        register, 
        handleSubmit,
        formState: {errors,isSubmitting}
    } = useForm<FormValues>()

    const onsubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" {...register("name",{required:'Name is required'})} placeholder="Enter your name"/>
            {errors.name && <span style={{color:'red'}}>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" {...register("email",{required:'Name is required',pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:'Invalid email address'
            }})} placeholder="Enter your email"/>
            {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" {...register("password",{minLength:{value:8,message:'Password must be at least 8 characters'}})} placeholder="Enter your password"/>
            {errors.password && <span style={{color:'red'}}>{errors.password.message}</span>}
            <button disabled={isSubmitting}>{isSubmitting ? 'Loading...' : "Submit"}</button>
        </div>
      </form>
    </div>
  )
}

export default Form
