import React from "react";
import { Search } from "../Search";
import { Languages } from "../Languages";
import { Subscribe } from "../Subscribe";
import { UserDesktop } from "../desktop/UserDesktop"
import { Menu } from "../Menu";
import { DateComponent } from "../DateComponent";

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