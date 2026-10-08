import React, {createContext, useState} from 'react';
export const MenuContext = createContext();
export function MenuProvider({children}){
    const [products, setProducts] = useState([
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

    ]);
    const [cartCount, setCartCount] =useState(0);
    const handleAddToCart = () =>{
        setCartCount((prev) => prev + 1);
            };
    const addItem = (newItem) => {
        setProducts((prevProducts) => [...prevProducts, {...newItem, id: DataTransfer.now()}]);

    };
    const updateItem = (updateItem) => {
        setProducts((prevProducts) =>
        prevProducts.map((item) (item.id === updateItem.id ? updateItem : item))
    );
    };
    const deleteItem = (id) => {
        setProducts((prevProducts) => prevProducts.filter((item) => String(item.id) !== String(id)));
    };
    const [user, setUser] = useState({name: 'Admin User', role: 'admin'});
    const updateUserRole = (newRole) => {
        setUser((prev) => ({...prev, role: newRole}));
    }
    return(
        <MenuContext.Provider value={{ products,setProducts, cartCount, handleAddToCart, addItem, updateItem, deleteItem, user, updateUserRole}}>
            {children}
        </MenuContext.Provider>
    )
}