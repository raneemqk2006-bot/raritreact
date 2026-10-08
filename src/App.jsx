import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import AdminDashboard from './Components/Admin/AdminDashboard';
import { Toaster } from 'react-hot-toast';
import ManageMessage from './Components/Admin/Manage/ManageMessages/ManageMessages.jsx';

export default function App() {
  return (
  <>
  <Toaster position="top-center"/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/reg" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/feed" element={<ManageMessage/>}/>
    </Routes>
  </>
    
  );
}