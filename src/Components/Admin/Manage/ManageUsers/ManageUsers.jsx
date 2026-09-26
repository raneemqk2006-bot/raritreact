import { useState } from "react";
import {Typography,Divider,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Button,Paper,Box } from "@mui/material";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "Admin", email: "admin@rarite.com", role: "Admin" },
    { id: 2, name: "User 1", email: "user@gmail.com", role: "Customer" },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1 }}>Manage Users</Typography>
      <Divider sx={{ mb: 3 }} />

      <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee" }}>
        <Table>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u, idx) => (
              <TableRow key={u.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{u.name}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(u.id)}
                  >
                    Delete User
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