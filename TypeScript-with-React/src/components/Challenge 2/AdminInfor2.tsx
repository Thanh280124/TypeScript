import { type UserInfor2Props } from "./UserInfor2"

type AdminInfor2Props = UserInfor2Props & {
    admin: string;
}
const AdminInfor2 = ({name,email,age,location,admin}: AdminInfor2Props) => {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
    </ul>
    </div>
  )
}

export default AdminInfor2
