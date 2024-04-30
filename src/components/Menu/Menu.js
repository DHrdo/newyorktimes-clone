import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Menu = ({ setLinkText }) => {

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
                            <li className="subtitle"><Link to={"/subcategory/us"} onClick={(event) => setLinkText(event.target.textContent)}>U.S.</Link></li>
                            <li className="subtitle"><Link to="/subcategory/climate" onClick={(event) => setLinkText(event.target.textContent)}>Climate</Link></li>
                            <li className="subtitle"><Link to="/subcategory/politics" onClick={(event) => setLinkText(event.target.textContent)}>Politics</Link></li>
                            <li className="subtitle"><Link to="/subcategory/sports" onClick={(event) => setLinkText(event.target.textContent)}>Sports</Link></li>
                            <li className="subtitle"><Link to="/subcategory/newyork" onClick={(event) => setLinkText(event.target.textContent)}>New York</Link></li>
                            <li className="subtitle"><Link to="/subcategory/business" onClick={(event) => setLinkText(event.target.textContent)}>Business</Link></li>
                            <li className="subtitle"><Link to="/subcategory/california" onClick={(event) => setLinkText(event.target.textContent)}>California</Link></li>
                            <li className="subtitle"><Link to="/subcategory/tech" onClick={(event) => setLinkText(event.target.textContent)}>Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory/education" onClick={(event) => setLinkText(event.target.textContent)}>Education</Link></li>
                            <li className="subtitle"><Link to={"/subcategory/theupshot"} onClick={(event) => setLinkText(event.target.textContent)}>The Upshot</Link></li>
                            <li className="subtitle"><Link to="/subcategory/health" onClick={(event) => setLinkText(event.target.textContent)}>Health</Link></li>
                            <li className="subtitle"><Link to="/subcategory/themagazine" onClick={(event) => setLinkText(event.target.textContent)}>The Magazine</Link></li>
                            <li className="subtitle"><Link to="/subcategory/obituaries" onClick={(event) => setLinkText(event.target.textContent)}>Obituaries</Link></li>
                            <li className="subtitle"><Link to="/subcategory/science" onClick={(event) => setLinkText(event.target.textContent)}>Science</Link></li>
                        </div>

                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">U.S. POLITICS</h4>
                            <li className="subtitle"><Link to="/subcategory/2024elections" onClick={(event) => setLinkText(event.target.textContent)}>2024 Elections</Link></li>
                            <li className="subtitle"><Link to="/subcategory/supremecourt" onClick={(event) => setLinkText(event.target.textContent)}>SupremeCourt</Link></li>
                            <li className="subtitle"><Link to="/subcategory/congress" onClick={(event) => setLinkText(event.target.textContent)}>Congress</Link></li>
                            <li className="subtitle"><Link to="/subcategory/bidenadministration" onClick={(event) => setLinkText(event.target.textContent)}>Biden Administration</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOP STORIES</h4>
                            <li className="subtitle"><Link to="/subcategory/trumpinvestigation" onClick={(event) => setLinkText(event.target.textContent)}>Trump Investigations</Link></li>
                            <li className="subtitle"><Link to="/subcategory/immigration" onClick={(event) => setLinkText(event.target.textContent)}>Immigration</Link></li>
                            <li className="subtitle"><Link to="/subcategory/abortion" onClick={(event) => setLinkText(event.target.textContent)}>Abortion</Link></li>
                            <li className="subtitle"><Link to="/subcategory/ericadams" onClick={(event) => setLinkText(event.target.textContent)}>The Eric Adams Administration</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/world" onClick={(event) => setLinkText(event.target.textContent)}>World</Link></li>
                            <li className="subtitle"><Link to="/subcategory/europe" onClick={(event) => setLinkText(event.target.textContent)}>Europe</Link></li>
                            <li className="subtitle"><Link to="/subcategory/africa" onClick={(event) => setLinkText(event.target.textContent)}>Africa</Link></li>
                            <li className="subtitle"><Link to="/subcategory/middleeast" onClick={(event) => setLinkText(event.target.textContent)}>Middle East</Link></li>
                            <li className="subtitle"><Link to="/subcategory/americas" onClick={(event) => setLinkText(event.target.textContent)}>Americas</Link></li>
                            <li className="subtitle"><Link to="/subcategory/science" onClick={(event) => setLinkText(event.target.textContent)}>Science</Link></li>
                            <li className="subtitle"><Link to="/subcategory/asia" onClick={(event) => setLinkText(event.target.textContent)}>Asia</Link></li>
                            <li className="subtitle"><Link to="/subcategory/climate" onClick={(event) => setLinkText(event.target.textContent)}>Climate</Link></li>
                            <li className="subtitle"><Link to="/subcategory/australia" onClick={(event) => setLinkText(event.target.textContent)}>Australia</Link></li>
                            <li className="subtitle"><Link to="/subcategory/health" onClick={(event) => setLinkText(event.target.textContent)}>Health</Link></li>
                            <li className="subtitle"><Link to="/subcategory/canada" onClick={(event) => setLinkText(event.target.textContent)}>Canada</Link></li>
                            <li className="subtitle"><Link to="/subcategory/obituaries" onClick={(event) => setLinkText(event.target.textContent)}>Obituaries</Link></li>
                        </div>

                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOP STORIES</h4>
                            <li className="subtitle"><Link to="/subcategory/israelhamaswar" onClick={(event) => setLinkText(event.target.textContent)}>Israel-Hamas War</Link></li>
                            <li className="subtitle"><Link to="/subcategory/russiaukrainewar" onClick={(event) => setLinkText(event.target.textContent)}>Russia-Ukraine War</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/business" onClick={(event) => setLinkText(event.target.textContent)}>Business</Link></li>
                            <li className="subtitle"><Link to="/subcategory/tech" onClick={(event) => setLinkText(event.target.textContent)}>Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory/economy" onClick={(event) => setLinkText(event.target.textContent)}>Economy</Link></li>
                            <li className="subtitle"><Link to="/subcategory/media" onClick={(event) => setLinkText(event.target.textContent)}>Media</Link></li>
                            <li className="subtitle"><Link to="/subcategory/financeandmarkets" onClick={(event) => setLinkText(event.target.textContent)}>Finance and Markets</Link></li>
                            <li className="subtitle"><Link to="/subcategory/dealbook" onClick={(event) => setLinkText(event.target.textContent)}>DealBook</Link></li>
                            <li className="subtitle"><Link to="/subcategory/personaltech" onClick={(event) => setLinkText(event.target.textContent)}>Personal Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory/energytransition" onClick={(event) => setLinkText(event.target.textContent)}>Energy Transition</Link></li>
                            <li className="subtitle"><Link to="/subcategory/yourmoney" onClick={(event) => setLinkText(event.target.textContent)}>Your Money</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOP STORIES</h4>
                            <li className="subtitle"><Link to="/subcategory/useconomy" onClick={(event) => setLinkText(event.target.textContent)}>U.S. Economy</Link></li>
                            <li className="subtitle"><Link to="/subcategory/stockmarket" onClick={(event) => setLinkText(event.target.textContent)}>Stock Market</Link></li>
                            <li className="subtitle"><Link to="/subcategory/artificalintelligence" onClick={(event) => setLinkText(event.target.textContent)}>Artificial Intelligence</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/todaysarts" onClick={(event) => setLinkText(event.target.textContent)}>Today's Arts</Link></li>
                            <li className="subtitle"><Link to="/subcategory/books" onClick={(event) => setLinkText(event.target.textContent)}>Books</Link></li>
                            <li className="subtitle"><Link to="/subcategory/bestsellers" onClick={(event) => setLinkText(event.target.textContent)}>Best Sellers</Link></li>
                            <li className="subtitle"><Link to="/subcategory/dance" onClick={(event) => setLinkText(event.target.textContent)}>Dance</Link></li>
                            <li className="subtitle"><Link to="/subcategory/movies" onClick={(event) => setLinkText(event.target.textContent)}>Movies</Link></li>
                            <li className="subtitle"><Link to="/subcategory/music" onClick={(event) => setLinkText(event.target.textContent)}>Music</Link></li>
                            <li className="subtitle"><Link to="/subcategory/television" onClick={(event) => setLinkText(event.target.textContent)}>Television</Link></li>
                            <li className="subtitle"><Link to="/subcategory/theater" onClick={(event) => setLinkText(event.target.textContent)}>Theater</Link></li>
                            <li className="subtitle"><Link to="/subcategory/popculture" onClick={(event) => setLinkText(event.target.textContent)}>Pop Culture</Link></li>
                            <li className="subtitle"><Link to="/subcategory/tmagazine" onClick={(event) => setLinkText(event.target.textContent)}>T Magazine</Link></li>
                            <li className="subtitle"><Link to="/subcategory/visualarts" onClick={(event) => setLinkText(event.target.textContent)}>Visual Arts</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">RECCOMMENDATIONS</h4>
                            <li className="subtitle"><Link to="/subcategory/bestof2023" onClick={(event) => setLinkText(event.target.textContent)}>Best of 2023</Link></li>
                            <li className="subtitle"><Link to="/subcategory/awardseason" onClick={(event) => setLinkText(event.target.textContent)}>Award Season</Link></li>
                            <li className="subtitle"><Link to="/subcategory/criticspicks" onClick={(event) => setLinkText(event.target.textContent)}>Critic's Picks</Link></li>
                            <li className="subtitle"><Link to="/subcategory/whattoread" onClick={(event) => setLinkText(event.target.textContent)}>What to Read</Link></li>
                            <li className="subtitle"><Link to="/subcategory/whattowatch" onClick={(event) => setLinkText(event.target.textContent)}>What to Watch</Link></li>
                            <li className="subtitle"><Link to="/subcategory/whattolistento" onClick={(event) => setLinkText(event.target.textContent)}>What to Listen To</Link></li>
                            <li className="subtitle"><Link to="/subcategory/5minutestomakeyourlovemusic" onClick={(event) => setLinkText(event.target.textContent)}>5 Minutes to Make You Love Music</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/alllifestyle" onClick={(event) => setLinkText(event.target.textContent)}>All Life style</Link></li>
                            <li className="subtitle"><Link to="/subcategory/well" onClick={(event) => setLinkText(event.target.textContent)}>Well</Link></li>
                            <li className="subtitle"><Link to="/subcategory/travel" onClick={(event) => setLinkText(event.target.textContent)}>Travel</Link></li>
                            <li className="subtitle"><Link to="/subcategory/style" onClick={(event) => setLinkText(event.target.textContent)}>Style</Link></li>
                            <li className="subtitle"><Link to="/subcategory/realestate" onClick={(event) => setLinkText(event.target.textContent)}>Real Estate</Link></li>
                            <li className="subtitle"><Link to="/subcategory/food" onClick={(event) => setLinkText(event.target.textContent)}>Food</Link></li>
                            <li className="subtitle"><Link to="/subcategory/fashion" onClick={(event) => setLinkText(event.target.textContent)}>Fashion</Link></li>
                            <li className="subtitle"><Link to="/subcategory/love" onClick={(event) => setLinkText(event.target.textContent)}>Love</Link></li>
                            <li className="subtitle"><Link to="/subcategory/yourmoney" onClick={(event) => setLinkText(event.target.textContent)}>Your Money</Link></li>
                            <li className="subtitle"><Link to="/subcategorytmagazine" onClick={(event) => setLinkText(event.target.textContent)}>T Magazine</Link></li>
                            <li className="subtitle"><Link to="/subcategory/visualarts" onClick={(event) => setLinkText(event.target.textContent)}>Visual Arts</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">COLUMNS</h4>
                            <li className="subtitle"><Link to="/subcategory/modernlove" onClick={(event) => setLinkText(event.target.textContent)}>Modern Love</Link></li>
                            <li className="subtitle"><Link to="/subcategory/thehunt" onClick={(event) => setLinkText(event.target.textContent)}>The Hunt</Link></li>
                            <li className="subtitle"><Link to="/subcategory/socialqs" onClick={(event) => setLinkText(event.target.textContent)}>Social Q's</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Ethicist</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">WELL</h4>
                            <li className="subtitle"><Link to="/subcategory/eat" onClick={(event) => setLinkText(event.target.textContent)}>Eat</Link></li>
                            <li className="subtitle"><Link to="/subcategory/move" onClick={(event) => setLinkText(event.target.textContent)}>Move</Link></li>
                            <li className="subtitle"><Link to="/subcategory/mind" onClick={(event) => setLinkText(event.target.textContent)}>Mind</Link></li>
                            <li className="subtitle"><Link to="/subcategory/family" onClick={(event) => setLinkText(event.target.textContent)}>Family</Link></li>
                            <li className="subtitle"><Link to="/subcategory/live" onClick={(event) => setLinkText(event.target.textContent)}>Live</Link></li>
                            <li className="subtitle"><Link to="/subcategory/askwell" onClick={(event) => setLinkText(event.target.textContent)}>Ask Well</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory/opinion" onClick={(event) => setLinkText(event.target.textContent)}>Opinion</Link></li>
                            <li className="subtitle"><Link to="/subcategory/guestessays" onClick={(event) => setLinkText(event.target.textContent)}>Guest Essays</Link></li>
                            <li className="subtitle"><Link to="/subcategory/editorials" onClick={(event) => setLinkText(event.target.textContent)}>Editorials</Link></li>
                            <li className="subtitle"><Link to="/subcategory/opdocs" onClick={(event) => setLinkText(event.target.textContent)}>Op-Docs</Link></li>
                            <li className="subtitle"><Link to="/subcategory/videos" onClick={(event) => setLinkText(event.target.textContent)}>Videos</Link></li>
                            <li className="subtitle"><Link to="/subcategory/letters" onClick={(event) => setLinkText(event.target.textContent)}>Letters</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOPICS</h4>
                            <li className="subtitle"><Link to="/subcategory/politics" onClick={(event) => setLinkText(event.target.textContent)}>Politics</Link></li>
                            <li className="subtitle"><Link to="/subcategory/world" onClick={(event) => setLinkText(event.target.textContent)}>World</Link></li>
                            <li className="subtitle"><Link to="/subcategory/business" onClick={(event) => setLinkText(event.target.textContent)}>Business</Link></li>
                            <li className="subtitle"><Link to="/subcategory/tech" onClick={(event) => setLinkText(event.target.textContent)}>Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory/climate" onClick={(event) => setLinkText(event.target.textContent)}>Climate</Link></li>
                            <li className="subtitle"><Link to="/subcategory/health" onClick={(event) => setLinkText(event.target.textContent)}>Health</Link></li>
                            <li className="subtitle"><Link to="/subcategory/culture" onClick={(event) => setLinkText(event.target.textContent)}>Culture</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">COLUMNIST</h4>
                            <li className="subtitle"><Link to="/subcategory/charlesmblow" onClick={(event) => setLinkText(event.target.textContent)}>Charles M. Blow</Link></li>
                            <li className="subtitle"><Link to="/subcategory/ezraklein" onClick={(event) => setLinkText(event.target.textContent)}>Ezra Klein</Link></li>
                            <li className="subtitle"><Link to="/subcategory/jamellebouie" onClick={(event) => setLinkText(event.target.textContent)}>Jamelle Bouie</Link></li>
                            <li className="subtitle"><Link to="/subcategory/nicholaskristof" onClick={(event) => setLinkText(event.target.textContent)}>Nicholas Kristof</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>David Brooks</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Paul Krugman</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Gail Collins</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Carlos Lozada</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Ross Douthat</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Tressie McMillan Cottom</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Maureen Dowd</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Pamela Paul</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>David French</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Lydia Polgreen</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Thomas L. Friedman</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Bret Stephens</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Michelle Goldberg</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Zeynep Tufekci</Link></li>
                        </div>
                    </ul>
                </section>

                <div className="section-divider"></div>

                <section className="section">
                    <h3 className="section-title" onClick={() => handleToggleCategories('Audio')}>Audio<span className="arrow">&#129175;</span></h3>
                    <ul className={openSectionId === "Audio" ? "subcategories" : "displayNone"}>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">LISTEN</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Headlines</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Book Review Podcast</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Daily</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Modern Love</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Hard Fork</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Run-Up</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Ezra Klein Show</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Popcast</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Matter of Opiniony</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Reporter Reads</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Serial Productions</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Sunday Read</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Spelling Bee</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Mini Crossword</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Wordle</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>The Crossword</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Vertex</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Connections</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Sudoku</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Letter Boxed</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Tiles</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">COMMUNITY</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Soelling Bee Forum</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Worldplay Column</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Wordle Review</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Submit a Crossword</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Meet Our Crossword Constructors</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Mini to Maestro</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Wordlebot</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Easy</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Vegetarian</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Dinner</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Vegan</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Quick</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Chicken</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Healthy</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Pasta</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Breakfast</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Dessert</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">EDITORS' PICKS</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Soups and Stews</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Easy Weeknight</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Newest Recipes</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>One-Pot Meals</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Slow Cooker Recipes</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Comfort Food</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Party Recipes</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Kitchen</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Tech</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Sleep</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Appliances</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Home and Garden</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Moving</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Travel</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Gifts</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Deals</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Baby and Kid</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Health and Fitness</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">THE BEST...</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Air Purifier</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Electric Toothbrush</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Pressure Washer</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Cordless Stick Vacuum</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Office Chair</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Robot Vacuum</Link></li>
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
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>NFL</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>NHL</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>NBA</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>MLS</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Premier League</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Formula 1</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>NCAAF</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>NWSL</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>NCAAM</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Golf</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Golf</Link></li>
                        </div>
                        <div className="wrap-subtitle-content">
                            <h4 className="section-subtitle-title">TOP STORIES</h4>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Must-Read Stories</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>Today's News</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>2024 NFL Draft</Link></li>
                            <li className="subtitle"><Link to="/subcategory" onClick={(event) => setLinkText(event.target.textContent)}>MLB Free Agency</Link></li>
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