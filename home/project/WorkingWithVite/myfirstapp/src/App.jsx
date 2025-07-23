function App() {
  const currdate = new Date().toLocaleTimeString();
  return (
    <div>

      <h1>Hello World</h1>
      <h2>The time now is {currdate}</h2>
    </div>
  );
}

export default App;