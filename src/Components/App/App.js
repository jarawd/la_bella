import React, { useState, useRef } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import { ProductContext } from '../../utils/context';
import Popup from '../Popup/Popup';

function App() {
  const [productsActive, setProductsActive] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const [popupData, setPopupData] = useState({});
  const goToProducts = useRef(null);
  const goToBranches = useRef(null);

  const contextVariables = {
    productsActive,
    setProductsActive,
    goToProducts,
    goToBranches,
    popupActive,
    setPopupActive,
    setPopupData,
  };
  return (
    <ProductContext.Provider value={contextVariables}>
      <div className="App">
        <Header />
        <Hero />
        <Main />
        <Popup
          active={popupActive}
          data={popupData}
        />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
