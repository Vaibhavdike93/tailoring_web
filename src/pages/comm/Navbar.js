import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src="/d.chandrakanlogo.png"
                        alt="Logo"
                        className="logo_img"

                    />
                </Link>

                {/* Modern hamburger menu */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    {/* Centered navigation links with subtle hover effects */}
                    <ul className="navbar-nav mx-auto mb-1 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link hover-underline" to="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link hover-underline" to="/about">
                                <span>About us</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link hover-underline" to="/services">
                                <span>Service</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link hover-underline" to="/gallery">
                                <span>Gallery</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link hover-underline" to="/appointment">
                                <span>Appointment</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link hover-underline" to="/testimonials">
                                <span>Testimonials</span>
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link hover-underline" to="/contact">
                                <span>Contact us</span>
                            </Link>
                        </li>
        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;