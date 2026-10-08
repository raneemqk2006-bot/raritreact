import { createContext, useState } from "react";

export const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "beauty of joseon sunscreen", price: 14, category: "sunscreen", image: "https://via.placeholder.com/150" },
    { id: 2, name: "anua serum calming green tea", price: 22, category: "serum", image: "https://via.placeholder.com/150" }
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((item) => (item.id === updatedProduct.id ? updatedProduct : item))
    );
  };

  return (
    <productContext.Provider value={{ products, addProduct, deleteProduct, updateProduct }}>
      {children}
    </productContext.Provider>
  );
};