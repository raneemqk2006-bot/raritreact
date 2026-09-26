import { createContext, useState, useEffect } from "react"

export const usersContext = createContext();
export default function UserProvider({children}){
    const [allUsers,setUsers] = useState(() =>{
        try{
            const savedUsers = localStorage.getItem("users");
        return savedUsers ? JSON.parse(savedUsers): [];
        } catch(e){
            return [];
        }
        
    } );
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(allUsers));

    }, [allUsers]);


    return (
    <usersContext.Provider value={{allUsers, setUsers}}>
        {children}
    </usersContext.Provider>

    );

}
