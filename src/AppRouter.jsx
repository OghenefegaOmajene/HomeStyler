import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import DesignStyles from "./pages/DesignStyles/DesignStyles";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

const AppRouter = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.name === product.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== productName));
  };

  const toggleCart = () => {
    // You can toggle the cart modal or sidebar here
  };

  const updateQuantity = (productName, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} toggleCart={toggleCart} />
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} toggleCart={toggleCart} cartItemCount={cartItems.length} />}
        />
        <Route path="/DesignStyles" element={<DesignStyles />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} toggleCart={toggleCart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
