
import { useState } from "react"
import UserList from "./components/UserList"
import AddUser from "./components/AddUser.tsx"

export interface UserType{
  username:string
  email:string
  id:number
}

function App() {
  const [users, setUsers] = useState<UserType[]>([])

  function handleAddUsers(username:string,email:string){
    setUsers((prevUser)=>{
      const newUser:UserType={
        id:Math.random(),
        username,
        email
      }

      return[...prevUser,newUser]
    })
  }

  function handleDeleteUser(id:number){
    setUsers((prev)=>prev.filter(item=>item.id!==id))
  }

  return (
<>
<div className="py-4 text-center">
<AddUser onAddUser={handleAddUsers}/>
</div>
   <UserList users={users} deleteUser={handleDeleteUser}/>
</>
  )
}

export default App
