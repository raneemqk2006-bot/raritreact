import { useContext } from "react"
import { usersContext } from '../Context/usersContext';
import toast from "react-hot-toast";


export const useAuth = () =>{
    const { allUsers, setUsers } = useContext(usersContext);
    const register = (usresData) =>{
        try{
            if(!usresData.email || !usresData.name || !usresData.password || !usresData.confirmPassword){
                 toast.error("you should fill all fields!");

            }
            if(usresData.password !== usresData.confirmPassword){
             toast.error("password should match")
             return;

            }

            if(allUsers.some((user) => user.email === usresData.email)){
                toast.error("you are already register, login")
                return;

            }
            setUsers([...allUsers,usresData]);
            toast.error("Registeration successful!");
            }catch(err){
            console.error(err);
            toast.error("something went wrong!");
        }
    };

    const login = (loginData) => {
        try{
            if(!loginData.email || !loginData.password)
            {
                toast.error("you should fill all fields!");
                return false;
            }
            const user =allUsers.find(
                (u) => u.email === loginData.email && u.password === loginData.password    
            );
            if(!user){
                toast.error("Invalid email or password!");
                return false;
            }
            toast.success('Welcome back');
            return true;
        }catch(err){
            console.error(err);
            toast.error("something went wrong!");
            return false;
        }
    };

    return{ allUsers , setUsers, register, login};
}
