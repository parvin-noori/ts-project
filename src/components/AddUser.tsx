import { FormEvent, useRef } from "react";

export default function AddUser() {
  const username=useRef<HTMLInputElement>(null)
  const email=useRef<HTMLInputElement>(null)
  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newUsername=username.current!.value
    const newEmail=email.current!.value
    // const formData=new FormData(e.currentTarget)
    // const userName=formData.get("username")
    // const email=formData.get("email")

    console.log(newUsername,newEmail)
    // console.log(userName,email)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 max-w-xl p-6 my-10 mx-auto bg-slate-800 rounded-md"
    >
      <input
        type="text"
        name="username"
        ref={username}
        id="username"
        placeholder="username"
        className="p-2 bg-slate-600 text-slate-300 outline-none rounded-md"
      />
      <input
        type="text"
        ref={email}
        id="email"
        name="email"
        placeholder="email"
        className="p-2 bg-slate-600 text-slate-300 outline-none rounded-md"
      />
      <button type="submit" className="px-4 py-2 bg-slate-800">
        add user
      </button>
    </form>
  );
}
