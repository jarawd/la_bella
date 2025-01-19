import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Main from '../Main/Main';
import Popup from '../Popup/Popup';
import About from '../About/About';
import Header from '../Header/Header';
import { ProductContext } from '../../utils/context';
import { LuArrowUpFromLine } from 'react-icons/lu';

function App() {
  const [popupActive, setPopupActive] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [dropMenu, setDropMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mainActive, setMainActive] = useState(true);
  const [aboutActive, setAboutActive] = useState(false);
  const [goUp, setGoUp] = useState(true);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const contextVariables = {
    popupActive,
    scrollPosition,
    dropMenu,
    setPopupActive,
    setPopupData,
    setDropMenu,
    setScrollPosition,
    setMainActive,
    setAboutActive,
    setGoUp,
  };

  return (
    <ProductContext.Provider value={contextVariables}>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={mainActive && <Main />}
          />
          <Route
            path="/la_bella"
            element={mainActive && <Main />}
          />
          <Route
            path="/about-us"
            element={aboutActive && <About />}
          />
        </Routes>
        <Popup
          active={popupActive}
          data={popupData}
        />
        <HashLink
          to="#home"
          className={`content__go-up${
            scrollPosition >= 590 && goUp ? ' active' : ''
          }`}
        >
          <LuArrowUpFromLine />
        </HashLink>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
