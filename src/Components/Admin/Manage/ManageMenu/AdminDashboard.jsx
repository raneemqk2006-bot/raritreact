import {useState} from 'react';
import { Box, Typography } from "@mui/material";
import Sidebar from "../../Sidebar";


export default function AdminDashboard(){
    const [selectedPage, setselectedPage] = useState('DashBoard');
    const renderContent = () => {
        if (selectedPage === "Users")
        {
            return <Typography variant='h5'>Users Page</Typography>;
        }
        else if (selectedPage === "Products")
        {
            return <Typography variant='h5'>Products Page</Typography>;
        }
        else if (selectedPage === "Categories"){
            return <Typography variant='h5'>Categories Page</Typography>
        }
        else if (selectedPage === "Orders"){
            return <Typography variant='h5'>Orders Page</Typography>
        }
        else if (selectedPage === "Profile"){
            return <Typography variant='h5'>Profile Page</Typography>
        }
        else{
            return <Typography variant='h5'>This is Dashboard</Typography>
        }
    }
    return<>
    <container style={{ minwidth: "100%", display:"flex", flexDirection:"row", justifyContent:"space-around", padding: 0}}>
        <Box sx={{flex: 1, bgcolor: "#222" ,minHeigh: "100vh"}}>
            <Sidebar selectedPage={selectedPage} setselectedPage={setselectedPage}/>
        </Box>
        <Box sx={{flex: 4, p:4, bgcolor: "f9f9f9", minHeigh:"100vh"}}>
            {renderContent()}
        </Box>
    </container>
    
    </>
}