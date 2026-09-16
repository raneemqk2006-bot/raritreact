import {Box, List, ListItemButton} from '@mui/material';
export default function Sidebar({setselectedPage}){
    return<>
    <Box>
        <List sx={{color:"white"}}>
            <ListItemButton onClick={ () => setselectedPage('DashBoard')} sx={{bgcolor:'rgba(255,255,255,0.1)'}}>DashBaord</ListItemButton>
            <ListItemButton onClick={ () => setselectedPage('Products')} sx={{bgcolor:'rgba(255,255,255,0.1)'}}>Products</ListItemButton>
            <ListItemButton onClick={ () => setselectedPage('Categories')} sx={{bgcolor:'rgba(255,255,255,0.1)'}}>Categories</ListItemButton>
            <ListItemButton onClick={ () => setselectedPage('Orders')} sx={{bgcolor:'rgba(255,255,255,0.1)'}}>Orders</ListItemButton>
            <ListItemButton onClick={ () => setselectedPage('Users')} sx={{bgcolor:'rgba(255,255,255,0.1)'}}>Users</ListItemButton>
            <ListItemButton onClick={ () => setselectedPage('Profile')} sx={{bgcolor:'rgba(255,255,255,0.1)'}}>Profile</ListItemButton>
        </List>

    </Box>
    </>
}