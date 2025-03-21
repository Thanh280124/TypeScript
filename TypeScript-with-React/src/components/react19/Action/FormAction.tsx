

const FormAction = () => {
    const formAction = (formData : any) => {
       const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
       } 
       console.log(userData)
    } 
  return (
    <form action={formAction}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' className='border-2 border-black rounded'/>
        <br/>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email' className='border-2 border-black rounded' />
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" id='password' name='password' className='border-2 border-black rounded'/>
        <button type='submit' className='border-2 border-black rounded'>Submit</button>
    </form>
  )
}

export default FormAction
