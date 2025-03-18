import User from "./components/User"
import Button from "./components/Reusable Types For Components Challenge/Button"
import UserInfo from "./components/Challenge 1/UserInfo"
import AdminInfo from "./components/Challenge 1/AdminInfo"
import { Info, AdminInfomation} from "./types"
import UserInfor2 from "./components/Challenge 2/UserInfor2"
import AdminInfor2 from "./components/Challenge 2/AdminInfor2"
import Counter from "./components/useState Types challenge/Counter"
import UserProfile from "./components/useState Types challenge/UserProfile"
import TodoList from "./components/useState Types challenge/TodoList"
const App = () => {
  // const user : Info = {
  //   id: 1,
  //   name: 'Thanh',
  //   email: 'linh@gmail.com'
  // }

  // const admin : AdminInfomation = {
  //   id: 2,
  //   name: 'Linh',
  //   email: 'thanh@gmail.com',
  //   role: 'admin',
  //   lastLogin: new Date()
  // }
  return (
    <>
    {/* <User name='Thanh' age={21} isStudent ={true}/>
    <Button label = 'This is a button' onClick = {() => console.log('Button clicked')
    } disabled={false}/>


    <UserInfo user={user}/>
    <AdminInfo admin = {admin}/> 
    <h1>User InFor here</h1>
    <UserInfor2 name ="Thanh" age={21} email ="thanh@gmail.com" location ={['Vaasa',"Finland"]}/>

    <h1>Admin Infor here</h1>
    <AdminInfor2 name ="Linh" age={21} email ="linh@gmail.com" location ={['Ha Noi',"Viet Nam"]} admin ='yes'/>*/}
    <Counter/>
    <UserProfile/>
    <TodoList/>
    </>
  )
}

export default App