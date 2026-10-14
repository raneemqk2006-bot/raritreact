import React, {useState, useContext} from 'react';
import {Typography,Divider,TableContainer,Table,TableHead,TableRow,TableCell,TableBody,Button,Paper,Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { MenuContext } from "../../../../Context/MenuContext";

export default function ManageMenu() {
  const context = useContext(MenuContext);

  if(!context){
    return <Box sx={{p: 3}}>
      <Typography color='error'>
        Error: MenuContext is not loaded properly.
      </Typography>
    </Box>
  }
  const { products = [], deleteItem = () => {}, addItem = () => {}, updateItem = () => {} } = useContext(MenuContext);

  const [openModal, setOpenModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  const handleOpenAdd = () => {
    setIsEditMode(false);
    setEditingId(null);
    setTitle('');
    setDesc('');
    setPrice('');
    setImgSrc('');
    setOpenModal(true);
  };
  const handleOpenEdit = (item) => {
    setIsEditMode(true);
    setEditingId(item.id);
    setTitle(item.title || item.name || '');
    setDesc(item.desc || item.description || '');
    setPrice(item.price || '');
    setImgSrc(item.imgSrc || '');
    setOpenModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !price) return;

  const formattedPrice = price.includes('JOD') ? price : `${price} JOD`;
    const imagePath = imgSrc || '/Celimax - The Real Noni Moisture Balancing Toner.jpg';

    if (isEditMode) {
      updateItem({
        id: editingId,
        title,
        desc,
        price: formattedPrice,
        imgSrc: imagePath
      });
    } else {
      addItem({
        title,
        desc,
        price: formattedPrice,
        imgSrc: imagePath
      });
    }

    setOpenModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteItem(id);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>Manage Menu</Typography>
        <Button 
          variant="contained" 
          onClick={handleOpenAdd}
          sx={{ bgcolor: '#222', color: '#fff', '&:hover': { bgcolor: '#000' }, textTransform: 'none', px: 3, py: 1 }}
        >
          + Add New Product
        </Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <TableContainer component={Paper} elevation={0} sx={{ border: "1px solid #eee", borderRadius: '12px' }}>
        <Table>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Number</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products && products.length > 0 ? (
              products.map((item, idx) => (
                <TableRow key={item.id || idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{item.title || item.name}</TableCell>
                  <TableCell>{item.desc || item.description || '-'}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="warning"
                      size="small"
                      sx={{ mr: 1, textTransform: 'none' }}
                      onClick={() => handleOpenEdit(item)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      sx={{ textTransform: 'none' }}
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center" sx={{ py: 3, color: '#777' }}>
                  No products available. Click "+ Add New Product" to add one.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>
          {isEditMode ? 'Edit Product' : 'Add New Product'}
        </DialogTitle>
        <Box component="form" onSubmit={handleSubmit}>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '10px !important' }}>
            <TextField 
              label="Product Title" 
              size="small" 
              fullWidth 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
            <TextField 
              label="Description" 
              size="small" 
              fullWidth 
              value={desc} 
              onChange={(e) => setDesc(e.target.value)} 
            />
            <TextField 
              label="Price (e.g. 19.80)" 
              size="small" 
              fullWidth 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              required 
            />
            <TextField 
              label="Image Path (e.g. /image.jpg)" 
              size="small" 
              fullWidth 
              value={imgSrc} 
              onChange={(e) => setImgSrc(e.target.value)} 
            />
          </DialogContent>
          <DialogActions sx={{ p: 3 }}>
            <Button onClick={() => setOpenModal(false)} color="inherit" sx={{ textTransform: 'none' }}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#000' }, textTransform: 'none' }}>
              {isEditMode ? 'Save Changes' : 'Add Product'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );

  
}