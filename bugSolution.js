```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Add count to the dependency array to fix the infinite loop 
    // The effect will now only run once after the initial render.
    setCount(count + 1);
  }, [count]); // Add count to the dependency array

  return <div>Count: {count}</div>;
}
```