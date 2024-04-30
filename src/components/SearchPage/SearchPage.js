import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { APICall } from '../MainPage/MainPage'
import { Loading } from './../Loading/Loading';


export const SearchPage = ({ isMenuOpened, userInputText, setLoading, loading }) => {

    const [searchNews, setSearchNews] = useState([]);

    //CHIAMATA API LER NEWS DELLE SOTTOCATEGORIE
    const API_KEY = 'cIi5dphyFv4WN0ZEh6bYsH6xqpMTVPDb';
    useEffect(() => {
        APICall(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userInputText.split(' ').join('')}&api-key=${API_KEY}`, setSearchNews, setLoading);
    }, []);


    //RENDERING DELLE NOTIZIE
    const mapSearchNews = searchNews.map((subNews, index) => {
        let { abstract = '', headline = '' } = subNews
        return (
            <div className="wrap-search-news" key={index}>
                <h2 className="search-headline">{headline}</h2>
                <p className="search-abstract">{abstract}</p>
            </div>
        )
    });

    return (
        <main className={!isMenuOpened ? "search-main" : "displayNone"}>
            <Helmet>
                <title>N.Y.T. - {userInputText}</title>
            </Helmet>

            {
                loading ?
                    <Loading /> :
                    <div className="search-main-content">
                        <h2 className="search-title">{userInputText.toUpperCase()}</h2>
                        {mapSearchNews}
                    </div>
            }
        </main>
    );
};