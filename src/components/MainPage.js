import React, { useState, useEffect } from "react";
import axios from "axios";

export const MainPage = (props) => {
    // Dichiarazione degli stati per immagazzinare le notizie principali e le altre notizie
    const [news, setNews] = useState([]);
    const [otherNews, setOtherNews] = useState([]);
    const [randomNews, setRandomNews] = useState([]);

    function saveNewsData(responseData, setArray) {
        const newsObj = responseData.map(item => (
            {
                newsID: item.uri,
                newsURL: item.url || item.web_url,
                title: item.title,
                abstract: item.abstract,
                byline: item.byline,
                headline: item.headline ? item.headline.main : [],

                multimedia: item.multimedia ? item.multimedia.slice(0, 3).map(media =>
                (
                    {
                        caption: media.caption,
                        copyright: media.copyright,
                        url: media.url,
                    }
                )) : [],
            }
        ));

        // Imposta lo stato con i dati delle notizie
        setArray(newsObj)
    };




    const API_KEY = process.env.KEY;
    
    // Funzione per effettuare la chiamata API per le altre notizie
    const getRandomCountries = () => {
        const countries = [
            "Afghanistan",
            "Albania",
            "Algeria",
            "Andorra",
            "Angola",
            "Antigua & Deps",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bhutan",
            "Bolivia",
            "Bosnia Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei",
            "Bulgaria",
            "Burkina",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Central African Rep",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo",
            "Congo {Democratic Rep}",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "East Timor",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Greece",
            "Grenada",
            "Guatemala",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland {Republic}",
            "Israel",
            "Italy",
            "Ivory Coast",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Korea North",
            "Korea South",
            "Kosovo",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Micronesia",
            "Moldova",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Morocco",
            "Mozambique",
            "Myanmar, {Burma}",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Poland",
            "Portugal",
            "Qatar",
            "Romania",
            "Russian Federation",
            "Rwanda",
            "St Kitts & Nevis",
            "St Lucia",
            "Saint Vincent & the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome & Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria",
            "Taiwan",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "Togo",
            "Tonga",
            "Trinidad & Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "United States",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Vatican City",
            "Venezuela",
            "Vietnam",
            "Yemen",
            "Zambia",
            "Zimbabwe"
        ];
    
        // Genera un paese casuale
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCity = countries[randomIndex];
        return randomCity;
    };
    
    const getNewsDeskItem = () => {
        const newsDeskValues = [
            "Adventure Sports",
            "Arts & Leisure",
            "Arts",
            "Automobiles",
            "Blogs",
            "Books",
            "Booming",
            "Business Day",
            "Business",
            "Cars",
            "Circuits",
            "Classifieds",
            "Connecticut",
            "Crosswords & Games",
            "Culture",
            "DealBook",
            "Dining",
            "Editorial",
            "Education",
            "Energy",
            "Entrepreneurs",
            "Environment",
            "Escapes",
            "Fashion & Style",
            "Fashion",
            "Favorites",
            "Financial",
            "Flight",
            "Food",
            "Foreign",
            "Generations",
            "Giving",
            "Global Home",
            "Health & Fitness",
            "Health",
            "Home & Garden",
            "Home",
            "Jobs",
            "Key",
            "Letters",
            "Long Island",
            "Magazine",
            "Market Place",
            "Media",
            "Men's Health",
            "Metro",
            "Metropolitan",
            "Movies",
            "Museums",
            "National",
            "Nesting",
            "Obits",
            "Obituaries",
            "Obituary",
            "OpEd",
            "Opinion",
            "Outlook",
            "Personal Investing",
            "Personal Tech",
            "Play",
            "Politics",
            "Regionals",
            "Retail",
            "Retirement",
            "Science",
            "Small Business",
            "Society",
            "Sports",
            "Style",
            "Sunday Business",
            "Sunday Review",
            "Sunday Styles",
            "T Magazine",
            "T Style",
            "Technology",
            "Teens",
            "Television",
            "The Arts",
            "The Business of Green",
            "The City Desk",
            "The City",
            "The Marathon",
            "The Millennium",
            "The Natural World",
            "The Upshot",
            "The Weekend",
            "The Year in Pictures",
            "Theater",
            "Then & Now",
            "Thursday Styles",
            "Times Topics",
            "Travel",
            "U.S.",
            "Universal",
            "Upshot",
            "UrbanEye",
            "Vacation",
            "Washington",
            "Wealth",
            "Weather",
            "Week in Review",
            "Week",
            "Weekend",
            "Westchester",
            "Wireless Living",
            "Women's Health",
            "Working",
            "Workplace",
            "World",
            "Your Money"
        ];
    
        return newsDeskValues[Math.floor(Math.random() * newsDeskValues.length)];
    }
    
    
    
    function APICall(url, saveToState) {
        axios.get(url)
            .then(response => {
                const responseData = response.data.results || response.data.response.docs
                saveNewsData(responseData, saveToState);
            })
            .catch(error => {
                console.error('Request Error', error);
            })
    }
    
    
    
    
    useEffect(() => {
        APICall(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`, setNews);
        APICall(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${getRandomCountries()}&api-key=${API_KEY}`, setOtherNews);
        APICall(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:(${getNewsDeskItem()})&api-key=${API_KEY}`, setRandomNews);
    }, []);
    




    // Mappa le notizie principali
    const newsSection = news.map((newsElement, index) => {
        // Estrae i dati delle notizie
        let { url = '', caption = '', byline = '', copyright = '', title = '', abstract = '' } = newsElement

        // Se ci sono immagini, estrae l'URL e la didascalia della prima immagine
        if (newsElement.multimedia && newsElement.multimedia.length > 0) {
            ({ url, caption, byline, copyright } = newsElement.multimedia[0])
        };

        return (
            <section className="wrap-news-informations" key={index}>
                {/* Visualizza il segno "LIVE" */}
                <div className="wrap-live">
                    <p className="live">LIVE</p>
                    <p className="live-minutes">*h ago</p>
                </div>
                {/* Titolo e riassunto della notizia */}
                <h3 className="news-title">{title}</h3>
                <p className="news-abstract">{abstract}</p>
                <p className="more-updates">See more updates</p>
                {/* Immagine, didascalia e attributi della notizia */}
                <div className="wrap-image-details">
                    <img className="news-image" src={url} />
                    <p className="news-image-description">{props.screenSize < 768 && caption.length > 100 ? '' : caption}</p>
                    <p className="news-image-byline">{byline}</p>
                    <p className="news-image-copyright">{copyright}</p>
                </div>
            </section>
        )
    });

    // Mappa le altre notizie
    const otherNewsSection = otherNews.map((otherNewsElement, index) => {
        // Estrae i dati delle notizie
        let { headline = '', abstract = '' } = otherNewsElement

        return (
            <section className="wrap-news-informations-otherNews" key={index}>
                {/* Titolo e riassunto della notizia */}
                <h3 className="news-title-otherNews">{headline}</h3>
                <p className="news-abstract-otherNews">
                    {/* Limita il riassunto a 100 caratteri su schermi piccoli */}
                    {
                        props.screenSize < 768 ?
                            (abstract.length < 100 ? abstract : abstract.slice(0, 100)) :
                            abstract.slice(0, 500)
                    }
                </p>
                {/* Mostra "..." se il riassunto è troppo lungo */}
                {
                    props.screenSize > 768 ? (abstract.length > 500 && <p className="see-more-abstract">...</p>) :
                        (abstract.length > 100 && <p className="see-more-abstract">...</p>)
                }
            </section>
        )
    });


    const randomNewsSection = randomNews.map((randomNewsElement, index) => {
        let { headline = '', abstract = '' } = randomNewsElement

        return (
            <section className="wrap-news-informations-side" key={index}>
                <h3 className="news-title-side">{headline}</h3>
                <p className="news-abstract-side">{abstract}</p>
            </section>
        )
    });

    return (
        <main className={!props.isMenuOpened ? "main-page" : "displayNone"}>
            <div className="wrap-grid">
                <div className="main-news-sections">
                    {newsSection}
                </div>
                <div className="other-news-sections">
                    <h2 className="other-news-title">Other News:</h2>
                    {otherNewsSection}
                </div>
                <div className="side-news-sections">
                    <h2 className="side-news-title">You can be interested in:</h2>
                    {randomNewsSection}
                </div>
            </div>
        </main>
    )
}