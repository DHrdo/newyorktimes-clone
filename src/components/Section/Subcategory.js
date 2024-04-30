import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import { APICall } from '../MainPage/MainPage'
import { Loading } from './../Loading/Loading';

export const Subcategory = (
    {
        isMenuOpened,
        subname,
        linkText,
        setLoading,
        loading
    }
) => {

    const [subCategoryNews, setSubCategoryNews] = useState([])

    //CHIAMATA API LER NEWS DELLE SOTTOCATEGORIE
    const API_KEY = 'cIi5dphyFv4WN0ZEh6bYsH6xqpMTVPDb';
    useEffect(() => {
        APICall(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${subname}&api-key=${API_KEY}`, setSubCategoryNews, setLoading);
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
        <main className={!isMenuOpened ? "subcategory-main" : "displayNone"}>
            <Helmet>
                <title>N.Y.T. - {linkText}</title>
            </Helmet>

            {
                loading ?
                    <Loading /> :
                    <div className="subcategory-content">
                        <h2 className="subcategory-title">{linkText.toUpperCase()}</h2>
                        {mapSubcategoryNews}
                    </div>
            }
        </main>
    );
};

/*
*/