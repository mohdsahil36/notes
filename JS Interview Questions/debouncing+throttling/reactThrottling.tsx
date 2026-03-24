// This is without creating a seperate hook for throttling

import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const lastTimeRef = useRef(0);
  const delay = 1000; // 1 second throttle

  const styles = {
    main: {
      padding: '20px',
    },
    title: {
      color: '#5C6AC4'
    },
  };

  useEffect(() => {
    if (!input) return;

    const currentTime = Date.now();

    if (currentTime - lastTimeRef.current < delay) {
      console.log("This call will be skipped!");
      return;
    }

    lastTimeRef.current = currentTime;

    async function fetchData() {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${input}`
      );
      const data = await response.json();
      setResult(data.products);
    }

    fetchData();
  }, [input]);

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Throttling</h1>

      <input
        type="text"
        placeholder="Enter the value"
        onChange={(e) => setInput(e.target.value)}
      />

      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// after creating a new hook for throttling
import { useRef } from 'react';

export function useThrottle(callback, delay) {
  const lastTimeRef = useRef(0);

  return (...args) => {
    const now = Date.now();

    if (now - lastTimeRef.current < delay) {
      return;
    }

    lastTimeRef.current = now;
    callback(...args);
  };
}

import React, { useState } from 'react';
import { useThrottle } from './useThrottle';

function App() {
//   const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  const fetchData = async (query:any) => {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await res.json();
    setResult(data.products);
  };

  const throttledFetch = useThrottle(fetchData, 1000);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
        //   setInput(e.target.value);
          throttledFetch(e.target.value);
        }}
      />

      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;