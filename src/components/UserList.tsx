
import { ReactNode } from "react"
import { type UserType } from "../App"
import Message from "./Message"
import UserItem from "./UserItem"
interface UserListProps{
users:UserType[]
deleteUser:(id:number)=>void
}
export default function UserList({users,deleteUser}:UserListProps) {

  if(users.length===0){
    return <Message mode="allowed">we have no users</Message>
  }
  let messageText:ReactNode

  if(users.length>=2){
    messageText=<Message mode="notAllowed">we have many users</Message>
  }
  return (
   <>
   {messageText}
    <div className="flex justify-center">
      {users.map(user=>(
        <div key={user.id} className="w-1/2">
          
        <UserItem username={user.username} id={user.id} onDelete={deleteUser}>
{user.email}
        </UserItem>
        </div>
      ))}
    </div>
   </>
  )
}
