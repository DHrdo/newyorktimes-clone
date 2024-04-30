import React from "react"
import { Search } from "../Search/Search"
import { Menu } from "../Menu/Menu"
import { UserMobile } from "../mobile/UserMobile"
import { DateComponent } from "../DateComponent/DateComponent"

export const HeaderMobile = ({ screenSize, isMenuOpened, handleSearchClick, handleToggleMenu, handleGetSearchInputText, setLinkText, subName, searchState }) => {


    return (
        <header className="header-mobile">
            <div className="wrap-header">
                <div className="hamburger-menu-icon-container">
                    {
                        !isMenuOpened ?
                            <img
                                className="hamburger-menu-closed"
                                src={process.env.PUBLIC_URL + "/images/headerMenu/hamburger-closed-menu.png"}
                                alt="Menu"
                                onClick={handleToggleMenu}
                            /> :

                            <img
                                className="hamburger-menu-opened"
                                src={process.env.PUBLIC_URL + "/images/headerMenu/cross-menu-opened.png"}
                                alt="Menu"
                                onClick={handleToggleMenu}
                            />
                    }
                </div>

                <h1 className={!isMenuOpened ? "nyt-title" : "displayNone"}>THE NEW YORK TIMES</h1>


                <UserMobile isMenuOpened={isMenuOpened} />

            </div>

            <div className={isMenuOpened ? "menu-content" : "displayNone"}>
                <Search
                    screenSize={screenSize}
                    handleSearchClick={handleSearchClick}
                    handleGetSearchInputText={handleGetSearchInputText}
                    setLinkText={setLinkText}
                    subName={subName}
                    searchState={searchState}
                />

                <Menu setLinkText={setLinkText} />
            </div>
            <DateComponent screenSize={screenSize} isMenuOpened={isMenuOpened} />
        </header>
    )
}