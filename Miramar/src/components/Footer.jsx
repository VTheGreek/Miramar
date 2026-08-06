import { Link } from "react-router-dom";
import { PHONE_NUMBER } from "../constants/phone";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">

                <div className="footer-brand">
                    <Link to="/">
                        <h2>MIRAMAR</h2>
                        <span>SEACOAST</span>
                    </Link>

                    <p>
                        Mediterranean flavors, handcrafted cocktails
                        and unforgettable moments by the sea.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Explore</h3>

                    <a href="#about">Our Story</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-contact">
                    <h3>Connect</h3>

                    <a href={`tel:${PHONE_NUMBER}`}>
                        {PHONE_NUMBER}
                    </a>

                    <a
                        href="https://www.instagram.com/miramar.seacoast/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                </div>

                <div className="footer-reservation">
                    <span>RESERVATIONS</span>

                    <h3>
                        Join us by the sea.
                    </h3>

                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="footer-reserve-button"
                    >
                        Reserve a Table
                    </a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Miramar Seacoast.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer; 