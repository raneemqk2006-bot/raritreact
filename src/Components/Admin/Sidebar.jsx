import { Box, List, ListItem, ListItemButton, ListItemText, Typography, Paper } from "@mui/material";

export default function Sidebar({ currentView, setCurrentView }) {
  const menuItems = [
    { id: "menu", label: "Manage Menu" },
    { id: "users", label: "Manage Users" },
    { id: "messages", label: "Manage Messages" },
  ];

  return (
    <Paper elevation={1} sx={{ minHeight: "80vh", p: 2, borderRadius: "12px" }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
        Admin Panel
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              selected={currentView === item.id}
              onClick={() => setCurrentView(item.id)}
              sx={{ borderRadius: "8px" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}