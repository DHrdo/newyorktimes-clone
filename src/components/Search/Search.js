import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Search = ({ screenSize, handleGetSearchInputText }) => {

    const [searchClicked, setSearchClicked] = useState(false);
    const handleSearchClick = () => setSearchClicked(prevSearchClick => !prevSearchClick);


    const [userInput, setUserInput] = useState('');
    const saveUserInput = () => setUserInput(userInput); 


    return (
        <div className="wrap-search">
            {
                screenSize > 1024 &&
                <div className="search-img-container">

                    <img
                        className="search-img"
                        src={process.env.PUBLIC_URL + "/images/headerMenu/search-icon.png"}
                        alt="SEARCH"
                        onClick={handleSearchClick}
                    />

                </div>
            }
            <input
                className=
                {
                    !searchClicked && screenSize > 1024 ?
                        "visibilityHidden" :
                        "search-input"
                }
                type="text"
                placeholder="SEARCH"
                onChange={(event) => {
                    setUserInput(event.target.value);
                    handleGetSearchInputText(event);
                }}
            />

            <button
                className={
                    !searchClicked && screenSize > 1024 ?
                        "visibilityHidden" :
                        "search-submit"
                }
                onClick={saveUserInput}>
                <Link to={`/search/${userInput.split(' ').join('')}`}>GO</Link>
            </button>
        </div>


    )
}