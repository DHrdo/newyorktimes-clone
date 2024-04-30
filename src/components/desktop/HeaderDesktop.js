import React from "react";
import { Search } from "../Search/Search";
import { Languages } from "../Languages/Languages";
import { Subscribe } from "../Subscribe/Subscribe";
import { UserDesktop } from "../desktop/UserDesktop"
import { Menu } from "../Menu/Menu";
import { DateComponent } from "../DateComponent/DateComponent";

export const HeaderDesktop = (
    {
        screenSize,
        setLinkText,
        handleGetSearchInputText,
        searchState,
        subName
    }) => {

    return (
        <div className="header-desktop">
            <div className="wrap-header-flex">

                <Search
                    screenSize={screenSize}
                    handleGetSearchInputText={handleGetSearchInputText}
                    searchState={searchState}
                    subName={subName}
                />

                <Languages />
                <Subscribe />
                <UserDesktop />
            </div>

            <DateComponent screenSize={screenSize} />

            <Menu setLinkText={setLinkText} />
        </div>
    )
}