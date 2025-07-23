function App() {
  const currdate = new Date().toLocaleDateString();
  const currtime = new Date().toLocaleTimeString();
  return (
    <div>

      <h1>Welcome to My page.</h1>
      <h2>The time now is {currdate} & {currtime}</h2>
    </div>
  );
}

export default App;