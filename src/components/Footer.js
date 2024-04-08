import React, { useState, useEffect } from "react";

export const Footer = (props) => {
    return (
        <div className={!props.isMenuOpened ? "footer" : "displayNone"}>
            <h2 className="footer-title">The New York Times</h2>
            {props.screenSize > 1024 ?
                <div className="wrap-footer-desktop">
                    <ul className="footer-list">
                        <h6 className="footer-list-title">NEWS</h6>
                        <li><a href="#">Home Page</a></li>
                        <li><a href="#">World</a></li>
                        <li><a href="#">Coronavirus</a></li>
                        <li><a href="#">U.S.</a></li>
                        <li><a href="#">Politics</a></li>
                        <li><a href="#">New York</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Tech</a></li>
                        <li><a href="#">Science</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Wildfire Tracker</a></li>
                        <li><a href="#">Obituaries</a></li>
                        <li><a href="#">Today's Paper</a></li>
                        <li><a href="#">Corrections</a></li>
                        <li><a href="#">Trending</a></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">OPINION</h6>
                        <li><a href="#">Today's Opinion</a></li>
                        <li><a href="#">Columnists</a></li>
                        <li><a href="#">Editorials</a></li>
                        <li><a href="#">Guest Essays</a></li>
                        <li><a href="#">Letters</a></li>
                        <li><a href="#">Sunday Opinion</a></li>
                        <li><a href="#">Opinion Video</a></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">ARTS</h6>
                        <li><a href="#">Today's Arts</a></li>
                        <li><a href="#">Art & Design</a></li>
                        <li><a href="#">Best Sellers Book List</a></li>
                        <li><a href="#">Dance</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">Pop Culture</a></li>
                        <li><a href="#">Television</a></li>
                        <li><a href="#">Theater</a></li>
                        <li><a href="#">Video: Arts</a></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">LIVING</h6>
                        <li><a href="#">Automotive</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Love</a></li>
                        <li><a href="#">Magazine</a></li>
                        <li><a href="#">Parenting</a></li>
                        <li><a href="#">Real Estate</a></li>
                        <li><a href="#">Style</a></li>
                        <li><a href="#">T Magazine</a></li>
                        <li><a href="#">Travel</a></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">MORE</h6>
                        <li><a href="#">Reader Center</a></li>
                        <li><a href="#">The Athletic</a></li>
                        <li><a href="#">Wirecutter</a></li>
                        <li><a href="#">Cooking</a></li>
                        <li><a href="#">Headway</a></li>
                        <li><a href="#">Live Events</a></li>
                        <li><a href="#">The Learning Networks</a></li>
                        <li><a href="#">Podcasts</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">Graphics</a></li>
                        <li><a href="#">TimeMachine</a></li>
                        <li><a href="#">Times Store</a></li>
                        <li><a href="#">Manage My Account</a></li>
                        <li><a href="#">Gift Articles</a></li>
                        <li><a href="#">NYTLicensing</a></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">SUBSCRIBE</h6>
                        <li><a href="#" className="bolder">Home Delivery</a></li>
                        <li><a href="#" className="bolder">Digital Subscriptions</a></li>
                        <li><a href="#" className="bolder">Games</a></li>
                        <li><a href="#" className="bolder">Cooking</a></li>
                    </ul>
                </div>
                :
                <div className={"wrap-footer-mobile"}>
                    <ul className="footer-list">
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">OPINION</a></li>
                        <li><a href="#">ARTS</a></li>
                        <li><a href="#">ARTS</a></li>
                        <li><a href="#">LIVING</a></li>
                        <li><a href="#">LISTINGS & MORE</a></li>
                    </ul>
                </div>
            }
        </div>
    );
}