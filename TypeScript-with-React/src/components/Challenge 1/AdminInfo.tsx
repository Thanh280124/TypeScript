import { AdminInfomation } from "../../types"
type AdminInfoProps = {
  admin:AdminInfomation; 
}
const AdminInfo: React.FC<AdminInfoProps> = ({admin}) => {
  return (
    <div>
      <h1>Admin Information</h1>
      <p>{admin.id}</p>
      <p>{admin.name}</p>
      <p>{admin.email}</p>
      <p>{admin.role}</p>
      <p>{admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo
