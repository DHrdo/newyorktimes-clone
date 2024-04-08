import React, { useState } from "react";

export const Search = (props) => {
    const [searchClicked, setSearchClicked] = useState(false);

    function handleSearchClick() {
        setSearchClicked(prevSearchClick => !prevSearchClick);
    }

    return (
        <div className="wrap-search">
            {
                props.screenSize > 1024 &&
                <div className="search-img-container">
                    <img 
                    className="search-img" 
                    src={process.env.PUBLIC_URL + "/images/headerMenu/search-icon.png"} 
                    onClick={handleSearchClick}
                    />
                </div>
            }
            <input className={!searchClicked && props.screenSize > 1024 ? "visibilityHidden" : "search-input"} type="text" placeholder="SEARCH" />
            <button className={!searchClicked && props.screenSize > 1024 ? "visibilityHidden" : "search-submit"}>GO</button>
        </div>
    )
}