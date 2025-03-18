import { useState } from "react"

interface UserProfiles {
    name: string 
    age: number
    email: string
}

const UserProfile = () => {
   const [profile,setProfile] = useState<UserProfiles> ({
        name: '',
        age: 21,
        email: ''    
    })
  return (
    <section>
        <h2>User Profile</h2>
        <form>
            <input type="text" placeholder="Name" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})}/>
            <input type="number" placeholder="Age" value={profile.age > 0 ? profile.age : '' } onChange={(e) => setProfile({...profile, age: parseInt(e.target.value)})}/>
            <input type="email" placeholder="Email" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})}/>
        </form>
        <h1>{profile.name}</h1>
        <h1>{profile.age}</h1>
        <h1>{profile.email}</h1>
    </section>
  )
}

export default UserProfile