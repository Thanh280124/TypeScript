import { useState,useEffect } from "react"
type User ={
    id: number,
    name: string,
    email: string,
    username: string,
    phone: string,
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if(!response.ok){
                    throw new Error('Something went wrong')}
                const data : User[] = await response.json()
                setUsers(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setError('Some thing went wrong')
                setLoading(false)
            }
        }
        fetchData()
    },[])

    if(loading) return <p>Loading ...</p>
    if(error) return <p>{error}</p>
    return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default UserList
