import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import AdminDashboard from './Components/Admin/Manage/ManageMenu/AdminDashboard';

export default function App() {
  return (
  
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/reg" element={<Register/>}/>
      <Route path="/log" element={<Login/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
    </Routes>
  );
}