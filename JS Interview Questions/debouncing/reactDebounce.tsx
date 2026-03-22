import { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const styles = {
    main: {
      padding: "20px",
    },
    title: {
      color: "#5C6AC4",
    },
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      const fetchData = async () => {
        if (query) {
          const response = await fetch(
            `https://dummyjson.com/products/search?q=${query}`,
          );
          const result = await response.json();
          setResult(result.products);
        }
      };
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>Deboucing Question</h1>
      <div>
        <input
          type="text"
          placeholder="Type here..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <ul>
        {result.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
