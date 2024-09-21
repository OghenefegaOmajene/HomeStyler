import React from 'react'; 
import { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [count, setCount] =  useState(0);

  return (
    <div className='qtyCounter'>
        
        <button className="Increment" onClick={()=>setCount(count + 1)}> + </button>
        <p>{count}</p>
        <button className="Decrement" onClick={()=>setCount(count - 1 )}> - </button>
    </div>
  )
}

export default Counter;