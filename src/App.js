import { useState, useEffect } from 'react';
import './App.css';
import { HeaderMobile } from './components/mobile/HeaderMobile.js';
import { HeaderDesktop } from './components/desktop/HeaderDesktop.js';
import { MainPage } from './components/MainPage.js';
import { Footer } from './components/Footer.js';

const App = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [loader, setLoader] = useState(true);

  function handleToggleMenu() {
    setIsMenuOpened(prevMenuState => !prevMenuState);
  };

  useEffect(() => {
    getWindowSize();
  }, []);

  function getWindowSize() {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', getWindowSize);
    return () => window.removeEventListener('resize', getWindowSize);
  }

  return (
    <div className='App'>
      {
        loader ?
          <div className="loader-container">
            <div className="loader">
              <h1>Loading...</h1>
            </div>
          </div> :
          windowWidth > 1024 ?
            <HeaderDesktop screenSize={windowWidth} /> :
            <HeaderMobile screenSize={windowWidth} handleToggleMenu={handleToggleMenu} isMenuOpened={isMenuOpened} />
      }
      <MainPage screenSize={windowWidth} isMenuOpened={isMenuOpened} />
      <Footer screenSize={windowWidth} isMenuOpened={isMenuOpened} />
    </div>
  )
};

export default App;
