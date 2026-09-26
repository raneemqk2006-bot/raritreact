import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const useMenu = () => {
  const [menu, setMenu] = useState(() => {
    const savedMenu = localStorage.getItem("menu");
    return savedMenu ? JSON.parse(savedMenu) : [
      { id: 1, name: "Hydrating Cream", price: "25", description: "Moisturizer", quantity: 10 },
      { id: 2, name: "Rose Cleanser", price: "18", description: "Facial wash", quantity: 5 }
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

  return { menu, fetchAllMenuItem, deleteMenuItem };
};