import React from "react";
import { Link } from "react-router-dom";
export const Footer = (props) => {
    return (
        <div className={!props.isMenuOpened ? "footer" : "displayNone"}>
            <h2 className="footer-title">The New York Times</h2>
            {props.screenSize > 1024 ?
                <div className="wrap-footer-desktop">
                    <ul className="footer-list">
                        <h6 className="footer-list-title">NEWS</h6>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/world">World</Link></li>
                        <li><Link to="/coronavirus">Coronavirus</Link></li>
                        <li><Link to="/us">U.S.</Link></li>
                        <li><Link to="/politics">Politics</Link></li>
                        <li><Link to="/newyork">New York</Link></li>
                        <li><Link to="/business">Business</Link></li>
                        <li><Link to="/tech">Tech</Link></li>
                        <li><Link to="/science">Science</Link></li>
                        <li><Link to="/sports">Sports</Link></li>
                        <li><Link to="/wildfiretracker">Wildfire Tracker</Link></li>
                        <li><Link to="/obituaries">Obituaries</Link></li>
                        <li><Link to="/todayspaper">Today's Paper</Link></li>
                        <li><Link to="/corrections">Corrections</Link></li>
                        <li><Link to="/trending">Trending</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">OPINION</h6>
                        <li><Link to="/">Today's Opinion</Link></li>
                        <li><Link to="/">Columnists</Link></li>
                        <li><Link to="/">Editorials</Link></li>
                        <li><Link to="/">Guest Essays</Link></li>
                        <li><Link to="/">Letters</Link></li>
                        <li><Link to="/">Sunday Opinion</Link></li>
                        <li><Link to="/">Opinion Video</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">ARTS</h6>
                        <li><Link to="/">Today's Arts</Link></li>
                        <li><Link to="/">Art & Design</Link></li>
                        <li><Link to="/">Best Sellers Book List</Link></li>
                        <li><Link to="/">Dance</Link></li>
                        <li><Link to="/">Movies</Link></li>
                        <li><Link to="/">Music</Link></li>
                        <li><Link to="/">Pop Culture</Link></li>
                        <li><Link to="/">Television</Link></li>
                        <li><Link to="/">Theater</Link></li>
                        <li><Link to="/">Video: Arts</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">LIVING</h6>
                        <li><Link to="/">Automotive</Link></li>
                        <li><Link to="/">Games</Link></li>
                        <li><Link to="/">Education</Link></li>
                        <li><Link to="/">Health</Link></li>
                        <li><Link to="/">Jobs</Link></li>
                        <li><Link to="/">Love</Link></li>
                        <li><Link to="/">Magazine</Link></li>
                        <li><Link to="/">Parenting</Link></li>
                        <li><Link to="/">Real Estate</Link></li>
                        <li><Link to="/">Style</Link></li>
                        <li><Link to="/">T Magazine</Link></li>
                        <li><Link to="/">Travel</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">MORE</h6>
                        <li><Link to="/">Reader Center</Link></li>
                        <li><Link to="/">The Athletic</Link></li>
                        <li><Link to="/">Wirecutter</Link></li>
                        <li><Link to="/">Cooking</Link></li>
                        <li><Link to="/">Headway</Link></li>
                        <li><Link to="/">Live Events</Link></li>
                        <li><Link to="/">The Learning Networks</Link></li>
                        <li><Link to="/">Podcasts</Link></li>
                        <li><Link to="/">Video</Link></li>
                        <li><Link to="/">Graphics</Link></li>
                        <li><Link to="/">TimeMachine</Link></li>
                        <li><Link to="/">Times Store</Link></li>
                        <li><Link to="/">Manage My Account</Link></li>
                        <li><Link to="/">Gift Articles</Link></li>
                        <li><Link to="/">NYTLicensing</Link></li>
                    </ul>
                    <ul className="footer-list">
                        <h6 className="footer-list-title">SUBSCRIBE</h6>
                        <li><Link to="/homedelivery">Home Delivery</Link></li>
                        <li><Link to="/digitalsubscriptions">Digital Subscriptions</Link></li>
                        <li><Link to="/games">Games</Link></li>
                        <li><Link to="/cooking">Cooking</Link></li>
                    </ul>
                </div>
                :
                <div className={"wrap-footer-mobile"}>
                    <ul className="footer-list">
                        <li><Link to="/news">NEWS</Link></li>
                        <li><Link to="/opinion">OPINION</Link></li>
                        <li><Link to="/arts">ARTS</Link></li>
                        <li><Link to="/living">LIVING</Link></li>
                        <li><Link to="/listingsandmore">LISTINGS & MORE</Link></li>
                    </ul>
                </div>
            }
        </div>
    );
}