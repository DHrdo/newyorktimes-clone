import React, { useState } from "react";
import { Subscribe } from '../Subscribe/Subscribe'
import { Routes, Route, Link } from "react-router-dom";
import App from "../../App";

export const DateComponent = (props) => {

    const [currentDate, setCurrentDate] = useState("");

    React.useEffect(() => getDate(), []);




    function getDate() {

        const date = new Date();
        const options = {
            weekday: 'long',
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        };
        setCurrentDate(date.toLocaleDateString('en-US', options));
    }

    return (
        <div className={!props.isMenuOpened ? "date-Container" : "displayNone"}>
            <div className="wrap-date">
                <time className="dateTime">{currentDate}</time>
                {props.screenSize > 1024 && <p className="todays-paper">Today's Paper</p>}
            </div>

            {props.screenSize < 1024 && <Subscribe />}
            {props.screenSize > 1024 && <p className="nyt-title"><Link to={'/'}>THE NEW YORK TIMES</Link></p>}
        </div>
    )
}