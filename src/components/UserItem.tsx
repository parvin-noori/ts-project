import { type PropsWithChildren } from "react";

type UserItemProps=PropsWithChildren<{id:number,username:string,onDelete:(id:number)=>void}>

export default function UserItem({username,children,id,onDelete}:UserItemProps) {
  return (
    <div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
      <div className="p-4 m-4 text-center bg-slate-800 rounded-md w-2/5">
        <p className=" font-bold text-lg">{username}</p>
        <p className="p-1 ">{children}</p>
        <button onClick={()=>onDelete(id)} className="px-4 py-2 mt-4 bg-slate-900 text-slate-100 rounded-md">
          reset
        </button>
      </div>
    </div>
  );
}
