import { createContext, useState  } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToCart = (images,title, price) => {
    setItems((prevState) => [...prevState, {images, title, price }]);
  };

  const deleteAll = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };


  return (
    <CartContext.Provider value={{ items, addToCart , deleteAll   }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;