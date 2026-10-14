import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const useMenu = () => {
  const [menu, setMenu] = useState(() => {
    const savedMenu = localStorage.getItem("menu");
    return savedMenu ? JSON.parse(savedMenu) : [
      { id: 1, name: "Beauty of Joseon Cleanser", price: "13.29 JOD", description: "Cleanser", quantity: 10 },
      { id: 2, name: "Dr. Althea - 345 Relief Cream", price: "20 JOD", description: "Moistruizer", quantity: 5 }
    ];
  });

  const fetchAllMenuItem = () => {
    try {
      const savedMenu = localStorage.getItem("menu");
      if (savedMenu) {
        setMenu(JSON.parse(savedMenu));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addMenuItem = (newItem) => {
    try {
      const updatedMenu = [...menu, { ...newItem, id: Date.now() }];
      setMenu(updatedMenu);
      localStorage.setItem("menu", JSON.stringify(updatedMenu));
      toast.success("Item added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add item");
    }
  };

  const updateMenuItem = (updatedItem) => {
    try {
      const updatedMenu = menu.map((item) => 
        item.id === updatedItem.id ? updatedItem : item
      );
      setMenu(updatedMenu);
      localStorage.setItem("menu", JSON.stringify(updatedMenu));
      toast.success("Item updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update item");
    }
  };


  const deleteMenuItem = (id) => {
    try {
      const updatedMenu = menu.filter((item) => item.id !== id);
      setMenu(updatedMenu);
      localStorage.setItem("menu", JSON.stringify(updatedMenu));
      toast.success("Item deleted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete item");
    }
  };

  useEffect(() => {
    fetchAllMenuItem();
  }, []);

  return { menu,addMenuItem, updateMenuItem, fetchAllMenuItem, deleteMenuItem };
};