import {type ReactNode } from "react"

type MessageProps={
    mode:"allowed"|"notAllowed",
    children:ReactNode
}

export default function Message({mode,children}:MessageProps) {
    if(mode==="allowed"){

        return (
            <div className="text-center text-lg">
                <p>{children}</p>
            </div>
        )
    }
    return(
        <div className="text-center text-lg text-yellow-500">
            <p>{children}</p>
        </div>
    )
}
