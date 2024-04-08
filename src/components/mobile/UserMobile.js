import React, { useState } from "react";

export const UserMobile = (props) => {
    return (
        <div className={!props.isMenuOpened ? "user-icon-container" : "displayNone"}>
            <img
                className="user-icon"
                src={process.env.PUBLIC_URL + "/images/user.png"}
                alt="User" />
        </div>
    )
}

