import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import { ProductContext } from '../../utils/context';

function App() {
  const [productsActive, setProductsActive] = useState(false);
  const goToProducts = useRef(null);
  const goToBranches = useRef(null);

  const contextVariables = {
    productsActive,
    setProductsActive,
    goToProducts,
    goToBranches,
  };
  return (
    <ProductContext.Provider value={contextVariables}>
      <div className="App">
        <Header />
        <Hero />
        <Main />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
