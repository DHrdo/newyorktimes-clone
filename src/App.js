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

// Definizione del componente App
const App = () => {


  // ----------------- Definizione degli stati -----------------
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [subName, setSubName] = useState('');
  const [linkText, setLinkText] = useState('');
  console.log('linkText, app', linkText)
  const [userInputText, setUserInputText] = useState('');
  const [loading, setLoading] = useState(true);



  // ----------------- Hook per ottenere la posizione corrente ----------------- \\
  const location = useLocation();

  // ----------------- useEffect per gestire il link attivo nella navigazione ----------------- \\
  useEffect(() => {
    if (location.pathname === '/') {
      setLinkText(null); // Resetta il link attivo se si è nella homepage 
    }
    const subName = location.pathname.split('/')[2];
    setSubName(subName);
  }, [location.pathname]);



  // ----------------- useEffect per ottenere la dimensione della finestra del browser ----------------- \\
  useEffect(() => {
    const getWindowSize = () => {
      setWindowWidth(window.innerWidth);
    };
    getWindowSize();
    window.addEventListener('resize', getWindowSize);
    return () => window.removeEventListener('resize', getWindowSize);
  }, []);


  // Funzione per gestire l'apertura e la chiusura del menu mobile
  const handleToggleMenu = () => setIsMenuOpened(prevMenuState => !prevMenuState);

  // Funzione per ottenere il testo di input dalla barra di ricerca
  const getSearchInputText = event => setUserInputText(event.target.value);



  // ----------------- Renderizzazione del componente ----------------- \\
  return (
    <div className='App'>

      <Helmet>
        <title>New York Times Clone</title>
      </Helmet>

      {/* ----------------- Renderizza l'header mobile o desktop in base alla larghezza della finestra ----------------- */}
      {windowWidth > 1024 ? (
        <HeaderDesktop
          screenSize={windowWidth}
          setLinkText={setLinkText}
          handleGetSearchInputText={getSearchInputText}
        />
      ) : (
        <HeaderMobile
          screenSize={windowWidth}
          handleToggleMenu={handleToggleMenu}
          isMenuOpened={isMenuOpened}
          setLinkText={setLinkText}
          handleGetSearchInputText={getSearchInputText}
        />
      )}

      {/* ----------------- Definizione delle rotte ----------------- */}
      <Routes>
        <Route
          path='/'
          element={
            <MainPage
              screenSize={windowWidth}
              isMenuOpened={isMenuOpened}
              setLoading={setLoading}
              loading={loading}
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
              setLoading={setLoading}
              loading={loading}
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
              setLoading={setLoading}
              loading={loading}
            />
          }
        />
      </Routes>


      {/* ----------------- Renderizza il footer ----------------- */}
      <Footer
        screenSize={windowWidth}
        isMenuOpened={isMenuOpened}
      />
    </div>
  );
};

export default App;