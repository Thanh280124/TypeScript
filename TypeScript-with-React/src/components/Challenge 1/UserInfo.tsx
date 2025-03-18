import { Info } from "../../types"
type UserInfoProps = {
    user: Info;
}
const UserInfo : React.FC<UserInfoProps> = ({user}) => {
  return (
    <div>
      <h1>User Information</h1>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default UserInfo
