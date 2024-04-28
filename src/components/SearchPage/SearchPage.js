import React, { useEffect, useState } from "react";
import axios from "axios";
import { saveNewsData } from "../MainPage/MainPage";


export const SearchPage = ({ isMenuOpened, userInputText }) => {

    const [searchNews, setSearchNews] = useState([]);
    function searchAPICall(url, saveToState) {
        axios.get(url)
            .then(response => {
                const responseData = response.data.results || response.data.response.docs;
                saveNewsData(responseData, saveToState);
            })
            .catch(error => console.error(error));
    }



    //CHIAMATA API LER NEWS DELLE SOTTOCATEGORIE
    const API_KEY = 'cIi5dphyFv4WN0ZEh6bYsH6xqpMTVPDb';
    useEffect(() => {
        searchAPICall(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userInputText.split(' ').join('')}&api-key=${API_KEY}`, setSearchNews);
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
        <div className={!isMenuOpened ? "search-main" : "displayNone"}>
            <h2 className="search-title">{userInputText.toUpperCase()}</h2>
            {mapSearchNews}
        </div>
    );
};