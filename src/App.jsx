import React, { useState, useEffect } from 'react';
import './App.css';
// import Home from './pages/home/Home';
import AppRouter from './AppRouter';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  

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
