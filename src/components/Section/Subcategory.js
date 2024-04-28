import React, { useEffect, useState } from "react";
import axios from "axios";
import { saveNewsData } from "../MainPage/MainPage";

export const Subcategory = ({ isMenuOpened, subname, linkText }) => {


    const [subCategoryNews, setSubCategoryNews] = useState([])
    function subCategoryAPICall(url, saveToState) {
        axios.get(url)
            .then(response => {
                const responseData = response.data.results || response.data.response.docs
                saveNewsData(responseData, saveToState);
            })
            .catch(error => console.error(error))
    }



    //CHIAMATA API LER NEWS DELLE SOTTOCATEGORIE
    const API_KEY = 'cIi5dphyFv4WN0ZEh6bYsH6xqpMTVPDb';
    useEffect(() => {
        subCategoryAPICall(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${subname}&api-key=${API_KEY}`, setSubCategoryNews);
    }, []);


    //RENDERING DELLE NOTIZIE
    const mapSubcategoryNews = subCategoryNews.map((subNews, index) => {
        let { abstract = '', headline = '' } = subNews
        return (
            <div className="wrap-subcategory-news" key={index}>
                <h2 className="subcategory-headline">{headline}</h2>
                <p className="subcategory-abstract">{abstract}</p>
            </div>
        )
    })


    return (
        <div className={!isMenuOpened ? "subcategory-main" : "displayNone"}>
            <h2 className="subcategory-title">{linkText.toUpperCase()}</h2>
            {mapSubcategoryNews}
        </div>
    );
};

/*
*/