import React, { useState, useEffect } from "react";

const Counter = ({ stopAt }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set an interval to update the count every 10 milliseconds
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < stopAt) {
          return prevCount + 1;
        } else {
          clearInterval(interval); // Clear the interval when count reaches the stopAt value
          return prevCount;
        }
      });
    }, 10);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, [stopAt]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Counter;
