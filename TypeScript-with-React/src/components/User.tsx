import { FC } from "react"

type UserProps = {
    name:string, 
    age:number,
    isStudent:boolean
}

const User: FC<UserProps>  = ({name,age,isStudent} : UserProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  )
}

export default User
