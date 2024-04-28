import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = ({ handleGetLinkText }) => {

    const [openSectionId, setOpenSectionId] = useState(null);
    function handleToggleCategories(sectionId) {
        setOpenSectionId((prevOpenSectionId) => (
            prevOpenSectionId === sectionId ? null : sectionId
        ));
    }

    return (
        <div>
            <div className="wrap-sections">
                <section className="section">
                    <h3 className="section-title" onClick={() => handleToggleCategories('U.S.')}>U.S.<span className="arrow">&#129175;</span></h3>

                    <ul className={openSectionId === "U.S." ? "subcategories" : "displayNone"}>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">SECTIONS</h4>
                            <li className="subtitle"><Link to={"/subcategory/us"} onClick={(event) => handleGetLinkText(event)}>U.S.</Link></li>
                            <li className="subtitle"><Link to="/subcategory/climate" onClick={(event) => handleGetLinkText(event)}>Climate</Link></li>
                            <li className="subtitle"><Link to="/subcategory/politics" onClick={(event) => handleGetLinkText(event)}>Politics</Link></li>
                            <li className="subtitle"><Link to="/subcategory/sports" onClick={(event) => handleGetLinkText(event)}>Sports</Link></li>
                            <li className="subtitle"><Link to="/subcategory/newyork" onClick={(event) => handleGetLinkText(event)}>New York</Link></li>
                            <li className="subtitle"><Link to="/subcategory/business" onClick={(event) => handleGetLinkText(event)}>Business</Link></li>
                            <li className="subtitle"><Link to="/subcategory/california" onClick={(event) => handleGetLinkText(event)}>California</Link></li>
                            <li className="subtitle"><Link to="/subcategory/tech" onClick={(event) => handleGetLinkText(event)}>Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory/education" onClick={(event) => handleGetLinkText(event)}>Education</Link></li>
                            <li className="subtitle"><Link to={"/subcategory/theupshot"} onClick={(event) => handleGetLinkText(event)}>The Upshot</Link></li>
                            <li className="subtitle"><Link to="/subcategory/health" onClick={(event) => handleGetLinkText(event)}>Health</Link></li>
                            <li className="subtitle"><Link to="/subcategory/themagazine" onClick={(event) => handleGetLinkText(event)}>The Magazine</Link></li>
                            <li className="subtitle"><Link to="/subcategory/obituaries" onClick={(event) => handleGetLinkText(event)}>Obituaries</Link></li>
                            <li className="subtitle"><Link to="/subcategory/science" onClick={(event) => handleGetLinkText(event)}>Science</Link></li>
                        </div>

                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">U.S. POLITICS</h4>
                            <li className="subtitle"><Link to="/subcategory/2024elections" onClick={(event) => handleGetLinkText(event)}>2024 Elections</Link></li>
                            <li className="subtitle"><Link to="/subcategory/supremecourt" onClick={(event) => handleGetLinkText(event)}>SupremeCourt</Link></li>
                            <li className="subtitle"><Link to="/subcategory/congress" onClick={(event) => handleGetLinkText(event)}>Congress</Link></li>
                            <li className="subtitle"><Link to="/subcategory/bidenadministration" onClick={(event) => handleGetLinkText(event)}>Biden Administration</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOP STORIES</h4>
                            <li className="subtitle"><Link to="/subcategory/trumpinvestigation" onClick={(event) => handleGetLinkText(event)}>Trump Investigations</Link></li>
                            <li className="subtitle"><Link to="/subcategory/immigration" onClick={(event) => handleGetLinkText(event)}>Immigration</Link></li>
                            <li className="subtitle"><Link to="/subcategory/abortion" onClick={(event) => handleGetLinkText(event)}>Abortion</Link></li>
                            <li className="subtitle"><Link to="/subcategory/ericadams" onClick={(event) => handleGetLinkText(event)}>The Eric Adams Administration</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/world" onClick={(event) => handleGetLinkText(event)}>World</Link></li>
                            <li className="subtitle"><Link to="/subcategory/europe" onClick={(event) => handleGetLinkText(event)}>Europe</Link></li>
                            <li className="subtitle"><Link to="/subcategory/africa" onClick={(event) => handleGetLinkText(event)}>Africa</Link></li>
                            <li className="subtitle"><Link to="/subcategory/middleeast" onClick={(event) => handleGetLinkText(event)}>Middle East</Link></li>
                            <li className="subtitle"><Link to="/subcategory/americas" onClick={(event) => handleGetLinkText(event)}>Americas</Link></li>
                            <li className="subtitle"><Link to="/subcategory/science" onClick={(event) => handleGetLinkText(event)}>Science</Link></li>
                            <li className="subtitle"><Link to="/subcategory/asia" onClick={(event) => handleGetLinkText(event)}>Asia</Link></li>
                            <li className="subtitle"><Link to="/subcategory/climate" onClick={(event) => handleGetLinkText(event)}>Climate</Link></li>
                            <li className="subtitle"><Link to="/subcategory/australia" onClick={(event) => handleGetLinkText(event)}>Australia</Link></li>
                            <li className="subtitle"><Link to="/subcategory/health" onClick={(event) => handleGetLinkText(event)}>Health</Link></li>
                            <li className="subtitle"><Link to="/subcategory/canada" onClick={(event) => handleGetLinkText(event)}>Canada</Link></li>
                            <li className="subtitle"><Link to="/subcategory/obituaries" onClick={(event) => handleGetLinkText(event)}>Obituaries</Link></li>
                        </div>

                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOP STORIES</h4>
                            <li className="subtitle"><Link to="/subcategory/israelhamaswar" onClick={(event) => handleGetLinkText(event)}>Israel-Hamas War</Link></li>
                            <li className="subtitle"><Link to="/subcategory/russiaukrainewar" onClick={(event) => handleGetLinkText(event)}>Russia-Ukraine War</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/business" onClick={(event) => handleGetLinkText(event)}>Business</Link></li>
                            <li className="subtitle"><Link to="/subcategory/tech" onClick={(event) => handleGetLinkText(event)}>Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory/economy" onClick={(event) => handleGetLinkText(event)}>Economy</Link></li>
                            <li className="subtitle"><Link to="/subcategory/media" onClick={(event) => handleGetLinkText(event)}>Media</Link></li>
                            <li className="subtitle"><Link to="/subcategory/financeandmarkets" onClick={(event) => handleGetLinkText(event)}>Finance and Markets</Link></li>
                            <li className="subtitle"><Link to="/subcategory/dealbook" onClick={(event) => handleGetLinkText(event)}>DealBook</Link></li>
                            <li className="subtitle"><Link to="/subcategory/personaltech" onClick={(event) => handleGetLinkText(event)}>Personal Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory/energytransition" onClick={(event) => handleGetLinkText(event)}>Energy Transition</Link></li>
                            <li className="subtitle"><Link to="/subcategory/yourmoney" onClick={(event) => handleGetLinkText(event)}>Your Money</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOP STORIES</h4>
                            <li className="subtitle"><Link to="/subcategory/useconomy" onClick={(event) => handleGetLinkText(event)}>U.S. Economy</Link></li>
                            <li className="subtitle"><Link to="/subcategory/stockmarket" onClick={(event) => handleGetLinkText(event)}>Stock Market</Link></li>
                            <li className="subtitle"><Link to="/subcategory/artificalintelligence" onClick={(event) => handleGetLinkText(event)}>Artificial Intelligence</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/todaysarts" onClick={(event) => handleGetLinkText(event)}>Today's Arts</Link></li>
                            <li className="subtitle"><Link to="/subcategory/books" onClick={(event) => handleGetLinkText(event)}>Books</Link></li>
                            <li className="subtitle"><Link to="/subcategory/bestsellers" onClick={(event) => handleGetLinkText(event)}>Best Sellers</Link></li>
                            <li className="subtitle"><Link to="/subcategory/dance" onClick={(event) => handleGetLinkText(event)}>Dance</Link></li>
                            <li className="subtitle"><Link to="/subcategory/movies" onClick={(event) => handleGetLinkText(event)}>Movies</Link></li>
                            <li className="subtitle"><Link to="/subcategory/music" onClick={(event) => handleGetLinkText(event)}>Music</Link></li>
                            <li className="subtitle"><Link to="/subcategory/television" onClick={(event) => handleGetLinkText(event)}>Television</Link></li>
                            <li className="subtitle"><Link to="/subcategory/theater" onClick={(event) => handleGetLinkText(event)}>Theater</Link></li>
                            <li className="subtitle"><Link to="/subcategory/popculture" onClick={(event) => handleGetLinkText(event)}>Pop Culture</Link></li>
                            <li className="subtitle"><Link to="/subcategory/tmagazine" onClick={(event) => handleGetLinkText(event)}>T Magazine</Link></li>
                            <li className="subtitle"><Link to="/subcategory/visualarts" onClick={(event) => handleGetLinkText(event)}>Visual Arts</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">RECCOMMENDATIONS</h4>
                            <li className="subtitle"><Link to="/subcategory/bestof2023" onClick={(event) => handleGetLinkText(event)}>Best of 2023</Link></li>
                            <li className="subtitle"><Link to="/subcategory/awardseason" onClick={(event) => handleGetLinkText(event)}>Award Season</Link></li>
                            <li className="subtitle"><Link to="/subcategory/criticspicks" onClick={(event) => handleGetLinkText(event)}>Critic's Picks</Link></li>
                            <li className="subtitle"><Link to="/subcategory/whattoread" onClick={(event) => handleGetLinkText(event)}>What to Read</Link></li>
                            <li className="subtitle"><Link to="/subcategory/whattowatch" onClick={(event) => handleGetLinkText(event)}>What to Watch</Link></li>
                            <li className="subtitle"><Link to="/subcategory/whattolistento" onClick={(event) => handleGetLinkText(event)}>What to Listen To</Link></li>
                            <li className="subtitle"><Link to="/subcategory/5minutestomakeyourlovemusic" onClick={(event) => handleGetLinkText(event)}>5 Minutes to Make You Love Music</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/alllifestyle" onClick={(event) => handleGetLinkText(event)}>All Life style</Link></li>
                            <li className="subtitle"><Link to="/subcategory/well" onClick={(event) => handleGetLinkText(event)}>Well</Link></li>
                            <li className="subtitle"><Link to="/subcategory/travel" onClick={(event) => handleGetLinkText(event)}>Travel</Link></li>
                            <li className="subtitle"><Link to="/subcategory/style" onClick={(event) => handleGetLinkText(event)}>Style</Link></li>
                            <li className="subtitle"><Link to="/subcategory/realestate" onClick={(event) => handleGetLinkText(event)}>Real Estate</Link></li>
                            <li className="subtitle"><Link to="/subcategory/food" onClick={(event) => handleGetLinkText(event)}>Food</Link></li>
                            <li className="subtitle"><Link to="/subcategory/fashion" onClick={(event) => handleGetLinkText(event)}>Fashion</Link></li>
                            <li className="subtitle"><Link to="/subcategory/love" onClick={(event) => handleGetLinkText(event)}>Love</Link></li>
                            <li className="subtitle"><Link to="/subcategory/yourmoney" onClick={(event) => handleGetLinkText(event)}>Your Money</Link></li>
                            <li className="subtitle"><Link to="/subcategorytmagazine" onClick={(event) => handleGetLinkText(event)}>T Magazine</Link></li>
                            <li className="subtitle"><Link to="/subcategory/visualarts" onClick={(event) => handleGetLinkText(event)}>Visual Arts</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">COLUMNS</h4>
                            <li className="subtitle"><Link to="/subcategory/modernlove" onClick={(event) => handleGetLinkText(event)}>Modern Love</Link></li>
                            <li className="subtitle"><Link to="/subcategory/thehunt" onClick={(event) => handleGetLinkText(event)}>The Hunt</Link></li>
                            <li className="subtitle"><Link to="/subcategory/socialqs" onClick={(event) => handleGetLinkText(event)}>Social Q's</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Ethicist</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">WELL</h4>
                            <li className="subtitle"><Link to="/subcategory/eat" onClick={(event) => handleGetLinkText(event)}>Eat</Link></li>
                            <li className="subtitle"><Link to="/subcategory/move" onClick={(event) => handleGetLinkText(event)}>Move</Link></li>
                            <li className="subtitle"><Link to="/subcategory/mind" onClick={(event) => handleGetLinkText(event)}>Mind</Link></li>
                            <li className="subtitle"><Link to="/subcategory/family" onClick={(event) => handleGetLinkText(event)}>Family</Link></li>
                            <li className="subtitle"><Link to="/subcategory/live" onClick={(event) => handleGetLinkText(event)}>Live</Link></li>
                            <li className="subtitle"><Link to="/subcategory/askwell" onClick={(event) => handleGetLinkText(event)}>Ask Well</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/opinion" onClick={(event) => handleGetLinkText(event)}>Opinion</Link></li>
                            <li className="subtitle"><Link to="/subcategory/guestessays" onClick={(event) => handleGetLinkText(event)}>Guest Essays</Link></li>
                            <li className="subtitle"><Link to="/subcategory/editorials" onClick={(event) => handleGetLinkText(event)}>Editorials</Link></li>
                            <li className="subtitle"><Link to="/subcategory/opdocs" onClick={(event) => handleGetLinkText(event)}>Op-Docs</Link></li>
                            <li className="subtitle"><Link to="/subcategory/videos" onClick={(event) => handleGetLinkText(event)}>Videos</Link></li>
                            <li className="subtitle"><Link to="/subcategory/letters" onClick={(event) => handleGetLinkText(event)}>Letters</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOPICS</h4>
                            <li className="subtitle"><Link to="/subcategory/politics" onClick={(event) => handleGetLinkText(event)}>Politics</Link></li>
                            <li className="subtitle"><Link to="/subcategory/world" onClick={(event) => handleGetLinkText(event)}>World</Link></li>
                            <li className="subtitle"><Link to="/subcategory/business" onClick={(event) => handleGetLinkText(event)}>Business</Link></li>
                            <li className="subtitle"><Link to="/subcategory/tech" onClick={(event) => handleGetLinkText(event)}>Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory/climate" onClick={(event) => handleGetLinkText(event)}>Climate</Link></li>
                            <li className="subtitle"><Link to="/subcategory/health" onClick={(event) => handleGetLinkText(event)}>Health</Link></li>
                            <li className="subtitle"><Link to="/subcategory/culture" onClick={(event) => handleGetLinkText(event)}>Culture</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">COLUMNIST</h4>
                            <li className="subtitle"><Link to="/subcategory/charlesmblow" onClick={(event) => handleGetLinkText(event)}>Charles M. Blow</Link></li>
                            <li className="subtitle"><Link to="/subcategory/ezraklein" onClick={(event) => handleGetLinkText(event)}>Ezra Klein</Link></li>
                            <li className="subtitle"><Link to="/subcategory/jamellebouie" onClick={(event) => handleGetLinkText(event)}>Jamelle Bouie</Link></li>
                            <li className="subtitle"><Link to="/subcategory/nicholaskristof" onClick={(event) => handleGetLinkText(event)}>Nicholas Kristof</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>David Brooks</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Paul Krugman</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Gail Collins</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Carlos Lozada</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Ross Douthat</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Tressie McMillan Cottom</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Maureen Dowd</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Pamela Paul</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>David French</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Lydia Polgreen</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Thomas L. Friedman</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Bret Stephens</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Michelle Goldberg</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Zeynep Tufekci</Link></li>
                        </div>
                    </ul>
                </section>

                <div className="section-divider"></div>

                <section className="section">
                    <h3 className="section-title" onClick={() => handleToggleCategories('Audio')}>Audio<span className="arrow">&#129175;</span></h3>
                    <ul className={openSectionId === "Audio" ? "subcategories" : "displayNone"}>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">LISTEN</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Headlines</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Book Review Podcast</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Daily</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Modern Love</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Hard Fork</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Run-Up</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Ezra Klein Show</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Popcast</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Matter of Opiniony</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Reporter Reads</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Serial Productions</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Sunday Read</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Spelling Bee</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Mini Crossword</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Wordle</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>The Crossword</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Vertex</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Connections</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Sudoku</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Letter Boxed</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Tiles</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">COMMUNITY</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Soelling Bee Forum</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Worldplay Column</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Wordle Review</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Submit a Crossword</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Meet Our Crossword Constructors</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Mini to Maestro</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Wordlebot</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Easy</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Vegetarian</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Dinner</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Vegan</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Quick</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Chicken</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Healthy</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Pasta</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Breakfast</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Dessert</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">EDITORS' PICKS</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Soups and Stews</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Easy Weeknight</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Newest Recipes</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>One-Pot Meals</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Slow Cooker Recipes</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Comfort Food</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Party Recipes</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Kitchen</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Sleep</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Appliances</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Home and Garden</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Moving</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Travel</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Gifts</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Deals</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Baby and Kid</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Health and Fitness</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">THE BEST...</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Air Purifier</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Electric Toothbrush</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Pressure Washer</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Cordless Stick Vacuum</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Office Chair</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Robot Vacuum</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>NFL</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>NHL</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>NBA</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>MLS</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Premier League</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Formula 1</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>NCAAF</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>NWSL</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>NCAAM</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Golf</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Golf</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOP STORIES</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Must-Read Stories</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>Today's News</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>2024 NFL Draft</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => handleGetLinkText(event)}>MLB Free Agency</Link></li>
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
        </div>
    )

}