import React from "react"
import { Search } from "../Search"
import { Menu } from "../Menu"
import { UserMobile } from "../mobile/UserMobile"
import { DateComponent } from "../DateComponent"

export const HeaderMobile = (props) => {


    return (
        <header className="header-mobile">
            <div className="wrap-header">
                <div className="hamburger-menu-icon-container">
                    {
                        !props.isMenuOpened ?
                            <img
                                className="hamburger-menu-closed"
                                src={process.env.PUBLIC_URL + "/images/headerMenu/hamburger-closed-menu.png"}
                                alt="Menu"
                                onClick={props.handleToggleMenu}
                            /> :

                            <img
                                className="hamburger-menu-opened"
                                src={process.env.PUBLIC_URL + "/images/headerMenu/cross-menu-opened.png"}
                                alt="Menu"
                                onClick={props.handleToggleMenu}
                            />
                    }
                </div>

                <h1 className={!props.isMenuOpened ? "nyt-title" : "displayNone"}>THE NEW YORK TIMES</h1>


                <UserMobile isMenuOpened={props.isMenuOpened} />

            </div>

            <div className={props.isMenuOpened ? "menu-content" : "displayNone"}>
                <Search />
                <Menu />
            </div>
            <DateComponent screenSize={props.screenSize} isMenuOpened={props.isMenuOpened} />
        </header>
    )
}