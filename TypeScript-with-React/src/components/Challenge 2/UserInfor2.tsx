export type UserInfor2Props = {
    name: string;
    age: number;
    email: string;
    location: string[];
}

const UserInfor2 = ({name,email,age,location} : UserInfor2Props) => {
  return (
    <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
    </ul>
  )
}

export default UserInfor2