import React from "react";
import { Search } from "../Search/Search";
import { Languages } from "../Languages/Languages";
import { Subscribe } from "../Subscribe/Subscribe";
import { UserDesktop } from "../desktop/UserDesktop"
import { Menu } from "../Menu/Menu";
import { DateComponent } from "../DateComponent/DateComponent";

export const HeaderDesktop = (props) => {
    return (
        <div className="header-desktop">
            <div className="wrap-header-flex">
                <Search screenSize={props.screenSize} />
                <Languages />
                <Subscribe />
                <UserDesktop />
            </div>
            <DateComponent screenSize={props.screenSize} />
            <Menu />
        </div>
    )
}