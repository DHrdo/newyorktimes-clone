import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { APICall } from '../MainPage/MainPage';
import { Loading } from './../Loading/Loading';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};



// Componente SearchPage che visualizza i risultati della ricerca
export const SearchPage = (
    {
        isMenuOpened,
        userInputText,
        setLoading,
        loading
    }
) => {

    // State per memorizzare i risultati della ricerca
    const [searchNews, setSearchNews] = useState([]);

    // Chiama l'API per ottenere le notizie corrispondenti alla query dell'utente
    const API_KEY = process.env.REACT_APP_API_KEY;
    useEffect(() => {
        APICall(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userInputText.split(' ').join('')}&api-key=${API_KEY}`, setSearchNews, setLoading);
    }, []);


    const mapSearchNews = searchNews.map((subNews, index) => {
        let { abstract = '', headline = '' } = subNews;
        return (
            <div className="wrap-search-news" key={index}>
                <h2 className="search-headline">{headline}</h2>
                <p className="search-abstract">{abstract}</p>
            </div>
        );
    });

    return (
        <main className={!isMenuOpened ? "search-main" : "displayNone"}>
            <Helmet>
                <title>N.Y.T. - {userInputText}</title> {/* Titolo della pagina */}
            </Helmet>

            {/* Visualizza il componente di caricamento se loading è true, altrimenti mostra i risultati della ricerca */}
            {loading ? (
                <Loading />
            ) : (
                <div className="search-main-content">
                    <h2 className="search-title">{userInputText.toUpperCase()}</h2>
                    {mapSearchNews}
                </div>
            )}
        </main>
    );
};