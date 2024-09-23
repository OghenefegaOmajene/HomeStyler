import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import DesignStyles from "./pages/DesignStyles/DesignStyles";
import ProductPage from './pages/ProductPage/ProductPage'
import Product from './components/Product/Product';
import { useState } from "react";
import WishList from './pages/WishList/WishList';


const AppRouter = () => {

  const [wishListItems, setWishListItems] = useState([]);

  const addToWishlist = (product) => {
    setWishListItems((prevWishlist) => [...prevWishlist, product]);
  };

  
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/Home" 
          index element={<Home/>}
        />
        <Route path="/About" element={<About />} />
        <Route path="/DesignStyles" element={<DesignStyles addToWishlist={addToWishlist} />} />
        <Route path="/ProductPage" element={<ProductPage addToWishlist={addToWishlist} />} />
        <Route path="/WishList" element={<WishList wishListItems={wishListItems} />}/>
    
        <Route
          path="/product"
          element={<Product setWishListItems={setWishListItems} />}
        />

      </Routes>
    </Router>
  );
};

export default AppRouter;
