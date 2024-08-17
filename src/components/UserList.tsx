
import { type UserType } from "../App"
import UserItem from "./UserItem"
interface UserListProps{
users:UserType[]
deleteUser:(id:number)=>void
}
export default function UserList({users,deleteUser}:UserListProps) {
  return (
    <div className="flex justify-center">
      {users.map(user=>(
        <div key={user.id} className="w-1/2">
          
        <UserItem username={user.username} id={user.id} onDelete={deleteUser}>
{user.email}
        </UserItem>
        </div>
      ))}
    </div>
  )
}
