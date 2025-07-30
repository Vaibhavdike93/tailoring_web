import { Nav } from "react-bootstrap";
import Navbar from "./comm/Navbar";
import Footer from "./comm/Footer";

function Aboutus() {
    return (
        <>
            <Navbar />

                {/* About Section */}
                <section className="py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-1 order-2">
                                <div className="about-content pe-lg-5">
                                    <span className="about-tagline">About Our Legacy</span>
                                    <h2 className="about-heading">Master Tailors Since 1998</h2>
                                    <p className="about-lead">
                                        For over two decades, we've been transforming fabric into art with precision tailoring
                                        that celebrates individuality.
                                    </p>

                                    <div className="row g-4 mb-4">
                                        <div className="col-md-6">
                                            <div className="d-flex">
                                                <div className="about-feature-icon">
                                                    <i className="bi bi-scissors"></i>
                                                </div>
                                                <div>
                                                    <h5 className="about-feature-title">Handcrafted Excellence</h5>
                                                    <p className="about-feature-desc">Every garment receives 50+ hours of meticulous handwork</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex">
                                                <div className="about-feature-icon">
                                                    <i className="bi bi-award"></i>
                                                </div>
                                                <div>
                                                    <h5 className="about-feature-title">Award Winning</h5>
                                                    <p className="about-feature-desc">Recognized by Fashion Council for 5 consecutive years</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex">
                                                <div className="about-feature-icon">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                                <div>
                                                    <h5 className="about-feature-title">Client-Centric</h5>
                                                    <p className="about-feature-desc">5000+ satisfied clients worldwide</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex">
                                                <div className="about-feature-icon">
                                                    <i className="bi bi-flower3"></i>
                                                </div>
                                                <div>
                                                    <h5 className="about-feature-title">Sustainable</h5>
                                                    <p className="about-feature-desc">Ethically sourced premium materials</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="/appointment" className="about_btn">
                                        Schedule Your Fitting <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6 order-lg-2 order-1">
                                <div className="about-img-container position-relative">
                                    <img
                                        src="https://img.freepik.com/premium-photo/young-man-tailor-working-new-clothing_85869-8465.jpg"
                                        alt="Master Tailor at work"
                                        className="about-main-img img-fluid rounded-3 shadow-lg"
                                    />
                                    <div className="about-img-badge">
                                        <h4 className="mb-0">25+</h4>
                                        <small>Years Experience</small>
                                    </div>
                                    <div className="about-rating-badge">
                                        <div className="d-flex align-items-center">
                                            <div className="about-rating-icon">
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <div>
                                                <h6 className="mb-0">4.9/5</h6>
                                                <small className="text-muted">Customer Rating</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Our Story */}
                <section className="our-story-section py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Image Column */}
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="story-image-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                        alt="Tailoring Workshop"
                                        className="img-fluid story-image"
                                    />
                                    <div className="experience-badge">
                                        <span className="years">25</span>
                                        <span className="label">Years of Excellence</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="col-lg-6">
                                <h2 className="story-title">Our Heritage</h2>
                                <div className="ourstory_underline"></div>

                                <p className="story-text">
                                    Founded in a small Mumbai workshop in 1995, Tailor's Studio began with a singular vision:
                                    to blend time-honored tailoring traditions with modern aesthetics, creating garments that
                                    stand apart in both quality and style.
                                </p>

                                <p className="story-text">
                                    What started as a one-man operation has flourished into an atelier of master craftsmen,
                                    each dedicating their expertise to sartorial excellence. Every stitch tells our story of
                                    passion, precision, and relentless pursuit of perfection.
                                </p>

                                <div className="achievements-grid">
                                    <div className="achievement-item">
                                        <h3 className="achievement-number">25+</h3>
                                        <p className="achievement-label">Years Experience</p>
                                    </div>
                                    <div className="achievement-item">
                                        <h3 className="achievement-number">10K+</h3>
                                        <p className="achievement-label">Satisfied Clients</p>
                                    </div>
                                    <div className="achievement-item">
                                        <h3 className="achievement-number">50+</h3>
                                        <p className="achievement-label">Fabric Options</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="craftsmanship-section">
                    <div className="container">
                        <div className="craftsmanship-header text-center">
                            <h2 className="craftsmanship-title text-center">The Art of Tailoring</h2>
                            <div className="craftsmanship_underline mx-auto"></div>
                        </div>

                        <div className="craftsmanship-grid">
                            {/* Precision Measurements */}
                            <div className="craftsmanship-card">
                                <div className="card-icon">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 17h18v2H3zm0-7h18v2H3zm0-7h18v2H3z" />
                                    </svg>
                                </div>
                                <h3 className="card-title">Precision Measurements</h3>
                                <p className="card-text">
                                    25+ meticulous measurements ensure every garment fits like a second skin.
                                </p>
                            </div>

                            {/* Hand Cutting */}
                            <div className="craftsmanship-card">
                                <div className="card-icon">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.5 7.5L9 4 3 20l3.5 1.5L12 10l8.5-2.5z" />
                                    </svg>
                                </div>
                                <h3 className="card-title">Hand Cutting</h3>
                                <p className="card-text">
                                    Each pattern is hand-cut by masters with decades of experience.
                                </p>
                            </div>

                            {/* Hand Stitching */}
                            <div className="craftsmanship-card">
                                <div className="card-icon">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                                        <path d="M12 7a5 5 0 105 5 5 5 0 00-5-5z" />
                                    </svg>
                                </div>
                                <h3 className="card-title">Hand Stitching</h3>
                                <p className="card-text">
                                    Critical seams are hand-stitched for unparalleled durability.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-5">
                    <div className="container">
                        <div className="tailors-header text-center">
                            <h2 className="tailors-title">Master Tailors</h2>
                            <div className="tailors-underline mx-auto"></div>
                        </div>

                        <div className="tailors-grid">
                            {/* Tailor 1 */}
                            <div className="tailor-card">
                                <div className="tailor-image-container">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Rajesh Kumar"
                                        className="tailor-image"
                                    />
                                    <div className="experience-badge">25+ Years</div>
                                </div>
                                <div className="tailor-details">
                                    <h3 className="tailor-name">Rajesh Kumar</h3>
                                    <p className="tailor-title">Head Tailor</p>
                                    <p className="tailor-bio">
                                        With over two decades of experience, Rajesh specializes in bespoke suits that combine traditional techniques with modern silhouettes.
                                    </p>
                                </div>
                            </div>

                            {/* Tailor 2 */}
                            <div className="tailor-card">
                                <div className="tailor-image-container">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Priya Sharma"
                                        className="tailor-image"
                                    />
                                    <div className="experience-badge">15+ Years</div>
                                </div>
                                <div className="tailor-details">
                                    <h3 className="tailor-name">Priya Sharma</h3>
                                    <p className="tailor-title">Master Seamstress</p>
                                    <p className="tailor-bio">
                                        Priya's expertise in bridal and occasion wear has made her one of Mumbai's most sought-after dressmakers.
                                    </p>
                                </div>
                            </div>

                            {/* Tailor 3 */}
                            <div className="tailor-card">
                                <div className="tailor-image-container">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                        alt="Amit Patel"
                                        className="tailor-image"
                                    />
                                    <div className="experience-badge">12+ Years</div>
                                </div>
                                <div className="tailor-details">
                                    <h3 className="tailor-name">Amit Patel</h3>
                                    <p className="tailor-title">Fabric Specialist</p>
                                    <p className="tailor-bio">
                                        Amit's encyclopedic knowledge of fabrics helps clients select the perfect material for every occasion and climate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

        </>
    );
};

export default Aboutus