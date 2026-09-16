import { useContext } from "react"

export const useAuth = () =>{
    const { allUsers, setUsers } = useContext(useContext)

    const register = (usresData) =>{
        try{
            if(!usresData.email || !usresData.name || !usresData.password || !usresData.confirmpassword){
                 console.log("you should fill all fields!");
                 alert("wrong")

            }
            if(password !== confirmpassword){
             alert("password should match")

            }

            if(allUsers.includes(usresData.email)){
                alert("you are already register, login")

            }
            setUsers({...allUsers, usresData})
        

        }catch(err){
            console.log(err)
        }
    }





    return{}
}