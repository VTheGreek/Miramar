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
            menu: "Menu",
            contact: "Contact",
            reserve: "Reserve a Table",
        },

        gr: {
            home: "Αρχική",
            gallery: "Gallery",
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
            label: content[language].menu,
            kind: "dropdown",
        },
        {
            label: content[language].contact,
            to: "#contact",
            kind: "scroll",
        },
    ];

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

            {/* Brand */}

            <Link
                to="/"
                className="navbar-brand"
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
            >
                <h1>MIRAMÁR</h1>
                <span>SEACOAST</span>
            </Link>


            {/* Desktop Navigation */}

            <ul className="navbar-menu">

                {navLinks.map((link) => (
                    <li key={link.label}>

                        {/* Home / Route */}

                        {link.kind === "route" && (
                            <Link
                                to={link.to}
                                onClick={() => {
                                    if (link.to === "/") {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        });
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


            {/* Mobile hamburger */}

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


            {/* Desktop language switcher */}

            <div className="navbar-language">
                <LanguageSwitcher />
            </div>


            {/* Desktop reservation */}

            <a
                href={`tel:${PHONE_NUMBER}`}
                className="navbar-reserve"
            >
                {content[language].reserve}
            </a>


            {/* Mobile menu */}

            {mobileMenuOpen && (
                <div className="mobile-menu">

                    {/* Home */}

                    <Link
                        to="/"
                        onClick={() => {
                            setMobileMenuOpen(false);

                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        {content[language].home}
                    </Link>


                    {/* Gallery */}

                    <a
                        href="#gallery"
                        onClick={() =>
                            setMobileMenuOpen(false)
                        }
                    >
                        {content[language].gallery}
                    </a>


                    {/* Contact */}

                    <a
                        href="#contact"
                        onClick={() =>
                            setMobileMenuOpen(false)
                        }
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
                        onClick={() =>
                            setMobileMenuOpen(false)
                        }
                    >
                        {content[language].reserve}
                    </a>

                </div>
            )}

        </nav>
    );
}

export default Navbar;