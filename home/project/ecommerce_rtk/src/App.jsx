// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className='app-heading'>E-Commerce Application</h1>
      </header>
      <main className="app-main">
        <ProductList />
        <ShoppingCart />
      </main>
    </div>
  );
};

export default App;
