// import React from 'react';
// import './App.css';
// import Home from './pages/home/Home';
// // import Dashboard from './components/Dashboard/Dashboard';
// // import Navbar from './components/Navbar/Navbar';
// import AppRouter from './AppRouter';
// import Footer from "./components/Footer/Footer";

// function App() {
  
//   return (
//     <>  
//       <div className="Home">
//           <AppRouter></AppRouter>
//           {/* <Home></Home> */}
//           <Footer></Footer>
        
//         {/* <Dashboard></Dashboard> */}
//       </div>
      
//     </>
//   )
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css';
// import Home from './pages/home/Home';
import AppRouter from './AppRouter';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
// import Cart from './components/Cart/Cart'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   setCartItems((prevItems) => [...prevItems, product]);
  // };

  useEffect(() => {
    // Set a timer to switch off the loader after 10 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);



  return (
    <>  
      <div className="App">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <AppRouter />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
