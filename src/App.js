import { useState, useEffect } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { HeaderMobile } from './components/mobile/HeaderMobile.js';
import { HeaderDesktop } from './components/desktop/HeaderDesktop.js';
import { MainPage } from './components/MainPage/MainPage.js';
import { Footer } from './components/Footer/Footer.js';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Subcategory } from './components/Section/Subcategory.js';
import { SearchPage } from './components/SearchPage/SearchPage.js';



const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [subName, setSubName] = useState('');


  //FUNZIONE PER SETTARE LO STATE DEI LINK MENU

  const [linkText, setLinkText] = useState('');
  const GetLinkText = event => setLinkText(event.target.textContent);

  //---------------------------------------------------------------------------------


  //OTTENGO L'URL
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setLinkText(null);
    };
  }, [location.pathname]);

  useEffect(() => {
    const subName = location.pathname.split('/')[2];
    setSubName(subName);
  }, [location.pathname, subName]);


  //FUNZIONE PER APRIRE E CHIUDERE IL MENU

  const handleToggleMenu = () => setIsMenuOpened(prevMenuState => !prevMenuState);

  //---------------------------------------------------------------------------------


  //OTTENGO LA DIMENSIONE DELLA FINESTRA DEL BROWSER
  useEffect(() => getWindowSize(), [windowWidth]);
  function getWindowSize() {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', getWindowSize);
    return () => window.removeEventListener('resize', getWindowSize);
  };
  //---------------------------------------------------------------------------------


  //------------FUNZIONE DI RICERCA------------\\

  const [userInputText, setUserInputText] = useState('');
  const getSearchInputText = event => setUserInputText(event.target.value);
  //-------------------------------------------\\

  return (
    <div className='App'>
      <Helmet>
        <title>New York Times Clone</title>
      </Helmet>


      {
        windowWidth > 1024
          ?
          <HeaderDesktop
            screenSize={windowWidth}
            handleGetLinkText={GetLinkText} //FUNZIONE PER SETTARE LO STATE DEI LINK MENU
            handleGetSearchInputText={getSearchInputText} //FUNZIONE PER SETTARE LO STATE DEL SEARCH
          />

          :

          <HeaderMobile
            screenSize={windowWidth}
            handleToggleMenu={handleToggleMenu}
            isMenuOpened={isMenuOpened}
            handleGetLinkText={GetLinkText} //FUNZIONE PER SETTARE LO STATE DEI LINK MENU
            handleGetSearchInputText={getSearchInputText} //FUNZIONE PER SETTARE LO STATE DEL SEARCH
          />
      }
      <Routes>
        <Route
          path='/'
          element={
            <MainPage
              screenSize={windowWidth}
              isMenuOpened={isMenuOpened}
            />
          }
        />

        <Route
          path={`/subcategory/${subName}`}
          element={
            <Subcategory
              screenSize={windowWidth}
              handleToggleMenu={handleToggleMenu}
              isMenuOpened={isMenuOpened}
              subname={subName}
              linkText={linkText}
            />
          }
        />

        <Route
          path={`/search/${subName}`}
          element={
            <SearchPage
              screenSize={windowWidth}
              handleToggleMenu={handleToggleMenu}
              isMenuOpened={isMenuOpened}
              userInputText={userInputText}
            />
          }
        />

      </Routes>

      <Footer screenSize={windowWidth} isMenuOpened={isMenuOpened} />
    </div>
  )
};

export default App;

