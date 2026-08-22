import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { PHONE_NUMBER } from "../constants/phone";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const content = {
        en: {
            home: "Home",
            gallery: "Gallery",
            atmosphere: "Atmosphere",
            menu: "Menu",
            contact: "Contact",
            reserve: "Reserve a Table",
        },

        gr: {
            home: "Αρχική",
            gallery: "Gallery",
            atmosphere: "Ατμόσφαιρα",
            menu: "Μενού",
            contact: "Επικοινωνία",
            reserve: "Κάντε κράτηση",
        },
    };

    const navLinks = [
        {
            label: content[language].home,
            to: "/",
            kind: "route",
        },

        {
            label: content[language].gallery,
            to: "#gallery",
            kind: "scroll",
        },

        {
            label: content[language].atmosphere,
            to: "#atmosphere",
            kind: "scroll",
        },

        {
            label: content[language].menu,
            kind: "dropdown",
        },

        {
            label: content[language].contact,
            to: "#contact",
            kind: "scroll",
        },
    ];

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

            {/* ===========================
                BRAND
            =========================== */}

            <Link
                to="/"
                className="navbar-brand"
                onClick={() => {
                    closeMobileMenu();
                    goToTop();
                }}
            >
                <h1>MIRAMÁR</h1>
                <span>SEACOAST</span>
            </Link>


            {/* ===========================
                DESKTOP NAVIGATION
            =========================== */}

            <ul className="navbar-menu">

                {navLinks.map((link) => (
                    <li key={link.label}>

                        {/* Route */}

                        {link.kind === "route" && (
                            <Link
                                to={link.to}
                                onClick={() => {
                                    if (link.to === "/") {
                                        goToTop();
                                    }
                                }}
                            >
                                {link.label}
                            </Link>
                        )}


                        {/* Scroll link */}

                        {link.kind === "scroll" && (
                            <a href={link.to}>
                                {link.label}
                            </a>
                        )}


                        {/* Menu dropdown */}

                        {link.kind === "dropdown" && (
                            <div className="navbar-dropdown-wrapper">

                                <button
                                    type="button"
                                    className="navbar-dropdown-button"
                                    onClick={() =>
                                        setMenuOpen(!menuOpen)
                                    }
                                >
                                    {link.label}

                                    <span
                                        className={
                                            menuOpen
                                                ? "arrow open"
                                                : "arrow"
                                        }
                                    >
                                        ⌄
                                    </span>
                                </button>

                                {menuOpen && (
                                    <div className="navbar-dropdown">

                                        <Link to="/menu#food">
                                            Food
                                        </Link>

                                        <Link to="/menu#brunch">
                                            Brunch
                                        </Link>

                                        <Link to="/menu#coffee">
                                            Coffee & Beverages
                                        </Link>

                                        <Link to="/menu#wines">
                                            Wines
                                        </Link>

                                        <Link to="/menu#spirits">
                                            Spirits
                                        </Link>

                                        <Link to="/menu#cocktails">
                                            Signature Cocktails
                                        </Link>

                                    </div>
                                )}

                            </div>
                        )}

                    </li>
                ))}

            </ul>


            {/* ===========================
                MOBILE HAMBURGER
            =========================== */}

            <button
                type="button"
                className={`navbar-toggle ${
                    mobileMenuOpen ? "open" : ""
                }`}
                onClick={() =>
                    setMobileMenuOpen(!mobileMenuOpen)
                }
                aria-label={
                    mobileMenuOpen
                        ? "Close navigation"
                        : "Open navigation"
                }
                aria-expanded={mobileMenuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            {/* ===========================
                DESKTOP LANGUAGE SWITCHER
            =========================== */}

            <div className="navbar-language">
                <LanguageSwitcher />
            </div>


            {/* ===========================
                DESKTOP RESERVATION
            =========================== */}

            <a
                href={`tel:${PHONE_NUMBER}`}
                className="navbar-reserve"
            >
                {content[language].reserve}
            </a>


            {/* ===========================
                MOBILE MENU
            =========================== */}

            {mobileMenuOpen && (
                <div className="mobile-menu">

                    {/* Home */}

                    <Link
                        to="/"
                        onClick={() => {
                            closeMobileMenu();
                            goToTop();
                        }}
                    >
                        {content[language].home}
                    </Link>


                    {/* Gallery */}

                    <a
                        href="#gallery"
                        onClick={closeMobileMenu}
                    >
                        {content[language].gallery}
                    </a>


                    {/* Atmosphere */}

                    <a
                        href="#atmosphere"
                        onClick={closeMobileMenu}
                    >
                        {content[language].atmosphere}
                    </a>


                    {/* Contact */}

                    <a
                        href="#contact"
                        onClick={closeMobileMenu}
                    >
                        {content[language].contact}
                    </a>


                    {/* Divider */}

                    <div className="mobile-menu-divider"></div>


                    {/* Language */}

                    <LanguageSwitcher />


                    {/* Reservation */}

                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="mobile-menu-reserve"
                        onClick={closeMobileMenu}
                    >
                        {content[language].reserve}
                    </a>

                </div>
            )}

        </nav>
    );
}

export default Navbar;