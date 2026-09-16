import { createContext, useState } from "react"

export const userContext = createContext();
export default function UserProvider({children}){
    const [users,setUsers] = useState([]);
    localStorage.setItem("users",JSON.stringify(users));
    const allUsers = JSON.parse(localStorage.getItem("users"));


    return<userContext.Provider values={(allUsers, setUsers)}>
        {children}
    </userContext.Provider>;
}