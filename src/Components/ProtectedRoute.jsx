import { Navigate } from "react-router-dom";


export default function ProtectedRoute({children}){
    const savedUser = localStorage.getItem('user');
    const user = savedUser ? JSON.parse(savedUser) : null;

    if(!user || user.role !== 'admin'){
        return <Navigate to="/log" replace />;
    }

    return children;

}