import React, {createContext, useState, useEffect} from 'react';
export const MenuContext = createContext();
export function MenuProvider({children}){
    const [products, setProducts] = useState(() =>{
        const savedProducts = localStorage.getItem('products');
  return savedProducts ? JSON.parse(savedProducts) : [
    {
            id: 1,
            title: "Beauty of Joseon Cleanser",
            description: "Refresh your skin with Beauty of Joseon Green Plum Cleanser. A gentel gel cleanser with plum water and mung bean extract...",
            price: "13.29 JOD",
            imgSrc: '/Beauty of Joseon Green Plum Refreshing Cleanser 100mL.jpg'
        },
        {
            id: 2,
            title: 'SKIN1004 SunScreen',
            description: 'SKIN1004 Hyalu-Cica Water-Fit Sun Serum SPF 50 PA++++ | Lightweight Korean Sunscreen f or All Skin Types...',
            price: '13.21 JOD',
           imgSrc: '/Comparing Korean SKIN1004 Sunscreens_ Which One is Right for You_.jpg'
        },
        {
            id: 3,
            title: 'Beauty of Joseon SunScreen',
           description: 'Provides high-level protection against UVA and UVB rays with SPF50+ PA++++ Hydrates skin deeply with 30% rice seed water and soothing panthenol (Vitamin B5) Calms and revitalises skin stressed by sun exposure Lightweight, watery lotion texture absorbs quickly without white cast or greasy residue Leaves a fresh, semi-matte, dewy finish ideal for oily and combination skin Suitable for all skin types. 50ml',
           price: '15.85 JOD',
           imgSrc: '/sunscreenbeautyofjoseon.jpg'
       },
       {
           id: 4,
           title: 'Anua - Niacinamide 10 TXA 4 Serum',
           description: 'If your skin regimen can only do so much, power it up with this Anua niacinamide serum.',
           price: '18.80 JOD',
           imgSrc: '/Not To Brag.jpg'
       },
       {
           id: 5,
           title: 'Anua - Heartleaf 77 Soothing Toner',
           description: 'Highly moisturizing, this toner is infused with 77% houttuynia cordata extract along with other natural ingredients.',
           price: '22 JOD',
          imgSrc: '/Anua Heartleaf 77_ Soothing Toner - Toner; Korean toner; Beauty awards.jpg'
    },
    {
         id: 6,
         title: 'medicube - Collagen Night Wrapping Mask',
        description: "Don't be surprised if you end up purchasing this collagen mask again and again, as it gives skin an instant glass skin look.",
        price: '17.70 JOD',
        imgSrc: '/jpg(8).jpg'
    },
       {
            id: 7,
            title: 'Beauty of Joseon - Calming Serum Jumbo',
            description: 'This serum is enriched with EWG green grade ingredients including 50% green tea leaf water, 30% mugwort extract and 2% panthenol.',
            price: '19.5 JOD',
            imgSrc: '/Beauty of Joseon -calmingserumtea.jpg'
        },
        {
            id: 8,
            title: 'Dr. Althea - 345 Relief Cream',
            description: 'Relief from troubled skin and irritation is finally in sight with the Dr. Althea 345 Relief Cream.',
            price: '20.2 JOD',
            imgSrc: '/Dr_ Althea - 345 Relief Cream _ YesStyle.jpg'
    },
    {
            id: 9,
            title: 'celimax - The Real Noni Moisture Balancing Toner',
            description: 'Packed with over 80% noni extract, this pH-balanced toner delivers essential nutrients and deep hydration.',
            price: '19.80 JOD',
           imgSrc: '/Celimax - The Real Noni Moisture Balancing Toner.jpg'
    }
]
});
        
    const [cartCount, setCartCount] =useState(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart.reduce((total, item) => total + (item.quantity || 1), 0);
    });

    const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : { name: "Raneem", role: "admin" };
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addItem = (newItem) => {
    setProducts((prev) => [...prev, { ...newItem, id: Date.now() }]);
  };

  const updateItem = (updatedItem) => {
    setProducts((prev) => prev.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
  };

  const deleteItem = (id) => {
    setProducts((prev) => prev.filter((item) => String(item.id) !== String(id)));
  };

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateUserRole = (newRole) => {
    setUser((prev) => {
      const updated = { ...prev, role: newRole };
      localStorage.setItem('user', JSON.stringify(updated));
      return updated;
    });
  };
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingIndex = existingCart.findIndex((item) => item.id === product.id);

    if (existingIndex > -1) {
      existingCart[existingIndex].quantity = (existingCart[existingIndex].quantity || 1) + 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(existingCart));
    setCartCount(existingCart.reduce((total, item) => total + (item.quantity || 1), 0));
  };
    
    return(
        <MenuContext.Provider value={{ products,setCartCount, setProducts,loginUser,logoutUser, cartCount, handleAddToCart, addItem, updateItem, deleteItem, user, updateUserRole}}>
            {children}
        </MenuContext.Provider>
    )
}