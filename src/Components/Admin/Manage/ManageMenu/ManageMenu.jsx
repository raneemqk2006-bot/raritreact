import {Typography,Divider,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Button,Paper,Box } from "@mui/material";
import { useMenu } from "../../../../Hooks/useMenu";

export default function ManageMenu() {
  const { menu, deleteMenuItem } = useMenu();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteMenuItem(id);
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>Manage Menu</Typography>
      <Divider sx={{ mb: 3 }} />

      <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee" }}>
        <Table>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {menu && menu.map((item, idx) => (
              <TableRow key={item.id || idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{item.name}</TableCell>

                <TableCell>{item.description}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() => console.log("Edit:", item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}