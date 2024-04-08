import React, { useState } from "react";
import { Search } from "./Search";

export const Menu = () => {

    const [openSectionId, setOpenSectionId] = useState(null);
    function handleToggleCategories(sectionId) {
        setOpenSectionId((prevOpenSectionId) => (
            prevOpenSectionId === sectionId ? null : sectionId
        ));
    }

    return (
        <div className="wrap-sections">
            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('U.S.')}>U.S.<span className="arrow">&#129175;</span></h3>

                <ul className={openSectionId === "U.S." ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">SECTIONS</h4>
                        <li className="subtitle"><a href="#"><a href="#">U.S.</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Climate</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Politics</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Sports</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">New York</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Business</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">California</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Tech</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Education</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">The Upshot</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Health</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">The Magazine</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Obituaries</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Science</a></a></li>
                    </div>

                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">U.S. POLITICS</h4>
                        <li className="subtitle"><a href="#"><a href="#">2024 Elections</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#"></a>SupremeCourt</a></li>
                        <li className="subtitle"><a href="#"><a href="#"></a>Congress</a></li>
                        <li className="subtitle"><a href="#"><a href="#"></a>Biden Administration</a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">TOP STORIES</h4>
                        <li className="subtitle"><a href="#"><a href="#">Trump Investigations</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Immigration</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Abortion</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">The </a>Eric Adams Administration</a></li>
                    </div>

                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/theMorningNYT.jpg"} alt="The Morning" />
                            <h5 className="newsletter-title">The Morning</h5>
                            <p className="newsletter-description">Make sense of the day's news and ideas.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/theupshot-newsletter.png"} alt="The Upshot" />
                            <h5 className="newsletter-title">The Upshot</h5>
                            <p className="newsletter-description">Analysis that explains politics, policy and everyday life.</p>
                        </div>
                    </div>
                </ul>

            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('World')}>World<span className="arrow">&#129175;</span></h3>

                <ul className={openSectionId === "World" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">SECTIONS</h4>
                        <li className="subtitle"><a href="#"><a href="#">World</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Europe</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Africa</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Middle East</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Americas</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Science</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Asia</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Climate</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Australia</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Health</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Canada</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Obituaries</a></a></li>
                    </div>

                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">TOP STORIES</h4>
                        <li className="subtitle"><a href="#"><a href="#">Israel-Hamas War</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Russia-Ukraine War</a></a></li>
                    </div>

                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/theMorningNYT.jpg"} alt="Morning Briefing: Europe" />
                            <h5 className="newsletter-title">Morning Briefing: Europe</h5>
                            <p className="newsletter-description">Get what you need to know to start your day.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/theupshot-newsletter.png"} alt="The Interpreter" />
                            <h5 className="newsletter-title">The Interpreter</h5>
                            <p className="newsletter-description">Original analysis on the week’s biggest global stories.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/theInterpreternewsletter.jpg"} alt="Your Places: Global Updater" />
                            <h5 className="newsletter-title">Your Places: Global Updater</h5>
                            <p className="newsletter-description">The latest news for any part of the world you select.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/canadaLetter-Newsletter.jpg"} alt="Canada Letter" />
                            <h5 className="newsletter-title">Canada Letter</h5>
                            <p className="newsletter-description">Backstories and analysis from our Canadian correspondents.</p>
                        </div>
                    </div>
                </ul>
            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('Business')}>Business<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "Business" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">SECTIONS</h4>
                        <li className="subtitle"><a href="#"><a href="#">Business</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Tech</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Economy</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Media</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Finance and Markets</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">DealBook</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Personal Tech</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Energy Transition</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Your Money</a></a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">TOP STORIES</h4>
                        <li className="subtitle"><a href="#"><a href="#">U.S. Economy</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Stock Market</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Artificial Intelligence</a></a></li>
                    </div>
                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/dealBook-newsletter.jpg"} alt="DealBook" />
                            <h5 className="newsletter-title">DealBook</h5>
                            <p className="newsletter-description">The most crucial business and policy news you need to know.</p>
                        </div>
                    </div>
                </ul>
            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('Arts')}>Arts<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "Arts" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">SECTIONS</h4>
                        <li className="subtitle"><a href="#"><a href="#">Today's Arts</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Books</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Best Sellers</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Dance</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Movies</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Music</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Television</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Theater</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Pop Culture</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">T Magazine</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Visual Arts</a></a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">RECCOMMENDATIONS</h4>
                        <li className="subtitle"><a href="#"><a href="#">Best of 2023</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Award Season</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Critic's Picks</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">What to Read</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">What to Watch</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">What to Listen To</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">5 Minutes to Make You Love Music</a></a></li>
                    </div>

                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/ReadLikeTheWind-newsletter.jpg"} alt="Read Like the Wind" />
                            <h5 className="newsletter-title">Read Like the Wind</h5>
                            <p className="newsletter-description">Book recommendations from our critics.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/watching-newsletter.jpg"} alt="Watching" />
                            <h5 className="newsletter-title">Watching</h5>
                            <p className="newsletter-description">Streaming TV and movie recommendations.</p>
                        </div>
                    </div>
                </ul>
            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('Lifestyle')}>Lifestyle<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "Lifestyle" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">SECTIONS</h4>
                        <li className="subtitle"><a href="#"><a href="#">All Life style</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Well</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Travel</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Style</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Real Estate</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Food</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Fashion</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Love</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Your Money</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">T Magazine</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Visual Arts</a></a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">COLUMNS</h4>
                        <li className="subtitle"><a href="#"><a href="#">Modern Love</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">The Hunt</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Social Q's</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">The Ethicist</a></a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">WELL</h4>
                        <li className="subtitle"><a href="#"><a href="#">Eat</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Move</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Mind</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Family</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Live</a></a></li>
                        <li className="subtitle"><a href="#"><a href="#">Ask Well</a></a></li>
                    </div>
                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/OpenThread-newsletter.jpg"} alt="Open Thread" />
                            <h5 className="newsletter-title">Open Thread</h5>
                            <p className="newsletter-description">The latest news on what we wear, by our chief fashion critic.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/well-newsletter.jpg"} alt="Well Newsletter" />
                            <h5 className="newsletter-title">Well</h5>
                            <p className="newsletter-description">Essential news and guidance to live your healthiest life.</p>
                        </div>
                    </div>
                </ul>
            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('Opinion')}>Opinion<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "Opinion" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">SECTIONS</h4>
                        <li className="subtitle"><a href="#">Opinion</a></li>
                        <li className="subtitle"><a href="#">Guest Essays</a></li>
                        <li className="subtitle"><a href="#">Editorials</a></li>
                        <li className="subtitle"><a href="#">Op-Docs</a></li>
                        <li className="subtitle"><a href="#">Videos</a></li>
                        <li className="subtitle"><a href="#">Letters</a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">TOPICS</h4>
                        <li className="subtitle"><a href="#">Politics</a></li>
                        <li className="subtitle"><a href="#">World</a></li>
                        <li className="subtitle"><a href="#">Business</a></li>
                        <li className="subtitle"><a href="#">Tech</a></li>
                        <li className="subtitle"><a href="#">Climate</a></li>
                        <li className="subtitle"><a href="#">Health</a></li>
                        <li className="subtitle"><a href="#">Culture</a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">COLUMNIST</h4>
                        <li className="subtitle"><a href="#">Charles M. Blow</a></li>
                        <li className="subtitle"><a href="#">Ezra Klein</a></li>
                        <li className="subtitle"><a href="#">Jamelle Bouie</a></li>
                        <li className="subtitle"><a href="#">Nicholas Kristof</a></li>
                        <li className="subtitle"><a href="#">David Brooks</a></li>
                        <li className="subtitle"><a href="#">Paul Krugman</a></li>
                        <li className="subtitle"><a href="#">Gail Collins</a></li>
                        <li className="subtitle"><a href="#">Carlos Lozada</a></li>
                        <li className="subtitle"><a href="#">Ross Douthat</a></li>
                        <li className="subtitle"><a href="#">Tressie McMillan Cottom</a></li>
                        <li className="subtitle"><a href="#">Maureen Dowd</a></li>
                        <li className="subtitle"><a href="#">Pamela Paul</a></li>
                        <li className="subtitle"><a href="#">David French</a></li>
                        <li className="subtitle"><a href="#">Lydia Polgreen</a></li>
                        <li className="subtitle"><a href="#">Thomas L. Friedman</a></li>
                        <li className="subtitle"><a href="#">Bret Stephens</a></li>
                        <li className="subtitle"><a href="#">Michelle Goldberg</a></li>
                        <li className="subtitle"><a href="#">Zeynep Tufekci</a></li>
                    </div>
                </ul>
            </section>

            <div className="section-divider"></div>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('Audio')}>Audio<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "Audio" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">LISTEN</h4>
                        <li className="subtitle"><a href="#">The Headlines</a></li>
                        <li className="subtitle"><a href="#">The Book Review Podcast</a></li>
                        <li className="subtitle"><a href="#">The Daily</a></li>
                        <li className="subtitle"><a href="#">Modern Love</a></li>
                        <li className="subtitle"><a href="#">Hard Fork</a></li>
                        <li className="subtitle"><a href="#">The Run-Up</a></li>
                        <li className="subtitle"><a href="#">The Ezra Klein Show</a></li>
                        <li className="subtitle"><a href="#">Popcast</a></li>
                        <li className="subtitle"><a href="#">Matter of Opiniony</a></li>
                        <li className="subtitle"><a href="#">Reporter Reads</a></li>
                        <li className="subtitle"><a href="#">Serial Productions</a></li>
                        <li className="subtitle"><a href="#">The Sunday Read</a></li>
                    </div>

                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/audio-newsletter.jpg"} alt="Audio" />
                            <h5 className="newsletter-title">Audio</h5>
                            <p className="newsletter-description">Our editors share their favorite listens from the New York Times Audio app.</p>
                        </div>
                    </div>
                </ul>
            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('Games')}>Games<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "Games" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">PLAY</h4>
                        <li className="subtitle"><a href="#">Spelling Bee</a></li>
                        <li className="subtitle"><a href="#">The Mini Crossword</a></li>
                        <li className="subtitle"><a href="#">Wordle</a></li>
                        <li className="subtitle"><a href="#">The Crossword</a></li>
                        <li className="subtitle"><a href="#">Vertex</a></li>
                        <li className="subtitle"><a href="#">Connections</a></li>
                        <li className="subtitle"><a href="#">Sudoku</a></li>
                        <li className="subtitle"><a href="#">Letter Boxed</a></li>
                        <li className="subtitle"><a href="#">Tiles</a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">COMMUNITY</h4>
                        <li className="subtitle"><a href="#">Soelling Bee Forum</a></li>
                        <li className="subtitle"><a href="#">Worldplay Column</a></li>
                        <li className="subtitle"><a href="#">Wordle Review</a></li>
                        <li className="subtitle"><a href="#">Submit a Crossword</a></li>
                        <li className="subtitle"><a href="#">Meet Our Crossword Constructors</a></li>
                        <li className="subtitle"><a href="#">Mini to Maestro</a></li>
                        <li className="subtitle"><a href="#">Wordlebot</a></li>
                    </div>
                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/Gameplay-newsletter.jpg"} alt="Gameplay Newsletter" />
                            <h5 className="newsletter-title">Gameplay</h5>
                            <p className="newsletter-description">Puzzles, brain teasers, solving tips and more.</p>
                        </div>
                    </div>
                </ul>
            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('Cooking')}>Cooking<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "Cooking" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">RECIPES</h4>
                        <li className="subtitle"><a href="#">Easy</a></li>
                        <li className="subtitle"><a href="#">Vegetarian</a></li>
                        <li className="subtitle"><a href="#">Dinner</a></li>
                        <li className="subtitle"><a href="#">Vegan</a></li>
                        <li className="subtitle"><a href="#">Quick</a></li>
                        <li className="subtitle"><a href="#">Chicken</a></li>
                        <li className="subtitle"><a href="#">Healthy</a></li>
                        <li className="subtitle"><a href="#">Pasta</a></li>
                        <li className="subtitle"><a href="#">Breakfast</a></li>
                        <li className="subtitle"><a href="#">Dessert</a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">EDITORS' PICKS</h4>
                        <li className="subtitle"><a href="#">Soups and Stews</a></li>
                        <li className="subtitle"><a href="#">Easy Weeknight</a></li>
                        <li className="subtitle"><a href="#">Newest Recipes</a></li>
                        <li className="subtitle"><a href="#">One-Pot Meals</a></li>
                        <li className="subtitle"><a href="#">Slow Cooker Recipes</a></li>
                        <li className="subtitle"><a href="#">Comfort Food</a></li>
                        <li className="subtitle"><a href="#">Party Recipes</a></li>
                    </div>
                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/theCooking-Newsletter.jpg"} alt="The Cooking Newsletter" />
                            <h5 className="newsletter-title">The Cooking Newsletter</h5>
                            <p className="newsletter-description">Culinary inspiration from Sam Sifton and Melissa Clark.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/TheVeggie-newsletter.jpg"} alt="The Veggie" />
                            <h5 className="newsletter-title">The Veggie</h5>
                            <p className="newsletter-description">Delicious vegetarian recipes and tips from Tanya Sichynsky.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/FiveWeeknightDishes-newsletter.jpg"} alt="Five Weeknight Dishes" />
                            <h5 className="newsletter-title">Five Weeknight Dishes</h5>
                            <p className="newsletter-description">Dinner ideas for busy people from Emily Weinstein.</p>
                        </div>
                    </div>
                </ul>
            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('Wirecutter')}>Wirecutter<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "Wirecutter" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">REVIEWS</h4>
                        <li className="subtitle"><a href="#">Kitchen</a></li>
                        <li className="subtitle"><a href="#">Tech</a></li>
                        <li className="subtitle"><a href="#">Sleep</a></li>
                        <li className="subtitle"><a href="#">Appliances</a></li>
                        <li className="subtitle"><a href="#">Home and Garden</a></li>
                        <li className="subtitle"><a href="#">Moving</a></li>
                        <li className="subtitle"><a href="#">Travel</a></li>
                        <li className="subtitle"><a href="#">Gifts</a></li>
                        <li className="subtitle"><a href="#">Deals</a></li>
                        <li className="subtitle"><a href="#">Baby and Kid</a></li>
                        <li className="subtitle"><a href="#">Health and Fitness</a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">THE BEST...</h4>
                        <li className="subtitle"><a href="#">Air Purifier</a></li>
                        <li className="subtitle"><a href="#">Electric Toothbrush</a></li>
                        <li className="subtitle"><a href="#">Pressure Washer</a></li>
                        <li className="subtitle"><a href="#">Cordless Stick Vacuum</a></li>
                        <li className="subtitle"><a href="#">Office Chair</a></li>
                        <li className="subtitle"><a href="#">Robot Vacuum</a></li>
                    </div>
                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/TheRecommendation-newsletter.jpg"} alt="The Recommendation" />
                            <h5 className="newsletter-title">The Recommendation</h5>
                            <p className="newsletter-description">The best independent reviews, expert advice and intensively researched deals.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/CleanEverything-newsletter.jpg"} alt="Clean Everything" />
                            <h5 className="newsletter-title">Clean Everything</h5>
                            <p className="newsletter-description">Step-by-step advice on how to keep everything in your home squeaky clean.</p>
                        </div>
                    </div>
                </ul>
            </section>

            <section className="section">
                <h3 className="section-title" onClick={() => handleToggleCategories('The Athletic')}>The Athletic<span className="arrow">&#129175;</span></h3>
                <ul className={openSectionId === "The Athletic" ? "subcategories" : "displayNone"}>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">LEAGUES</h4>
                        <li className="subtitle"><a href="#">NFL</a></li>
                        <li className="subtitle"><a href="#">NHL</a></li>
                        <li className="subtitle"><a href="#">NBA</a></li>
                        <li className="subtitle"><a href="#">MLS</a></li>
                        <li className="subtitle"><a href="#">Premier League</a></li>
                        <li className="subtitle"><a href="#">Formula 1</a></li>
                        <li className="subtitle"><a href="#">NCAAF</a></li>
                        <li className="subtitle"><a href="#">NWSL</a></li>
                        <li className="subtitle"><a href="#">NCAAM</a></li>
                        <li className="subtitle"><a href="#">Golf</a></li>
                        <li className="subtitle"><a href="#">Golf</a></li>
                    </div>
                    <div className="wrap-subtitle-content">
                        <h4 className="section-subtitle-title">TOP STORIES</h4>
                        <li className="subtitle"><a href="#">Must-Read Stories</a></li>
                        <li className="subtitle"><a href="#">Today's News</a></li>
                        <li className="subtitle"><a href="#">2024 NFL Draft</a></li>
                        <li className="subtitle"><a href="#">MLB Free Agency</a></li>
                    </div>
                    <div className="wrap-section-subtitle-newsletters">
                        <h4 className="section-subtitle-title">NEWSLETTERS</h4>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/thePulse-newsletter.jpg"} alt="The Pulse" />
                            <h5 className="newsletter-title">The Pulse</h5>
                            <p className="newsletter-description">Delivering the top stories in sports, Sunday to Friday.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/theWindup-newsletter.jpg"} alt="The Windup" />
                            <h5 className="newsletter-title">The Windup</h5>
                            <p className="newsletter-description">The biggest stories in baseball, by Levi Weaver with Ken Rosenthal.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/theBounce-newsletter.jpg"} alt="The Bounce" />
                            <h5 className="newsletter-title">The Bounce</h5>
                            <p className="newsletter-description">Essential NBA news from Zach Harper and Shams Charania.</p>
                        </div>
                        <div className="wrap-newsletter-content">
                            <img className="newsletter-img" src={process.env.PUBLIC_URL + "/images/newsletters/fullTime-newsletter.jpg"} alt="Full Time" />
                            <h5 className="newsletter-title">Full Time</h5>
                            <p className="newsletter-description">The biggest women's soccer stories, from Emily Olsen, Meg Linehan & Steph Yang</p>
                        </div>
                    </div>
                </ul>
            </section>
        </div>
    )
}