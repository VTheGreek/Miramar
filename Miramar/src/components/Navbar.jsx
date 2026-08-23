import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { PHONE_NUMBER } from "../constants/phone";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
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

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const openMenu = () => {
        window.open("/miramar-menu-2026.pdf", "_blank");
    };

    return (
        <nav
            className={`navbar ${
                scrolled ? "navbar-scrolled" : ""
            }`}
        >

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

                {/* Home */}

                <li>
                    <Link
                        to="/"
                        onClick={goToTop}
                    >
                        {content[language].home}
                    </Link>
                </li>


                {/* Atmosphere */}

                <li>
                    <a href="#atmosphere">
                        {content[language].atmosphere}
                    </a>
                </li>




                {/* Gallery */}

                <li>
                    <a href="#gallery">
                        {content[language].gallery}
                    </a>
                </li>


                {/* Menu */}

                <li>
                    <button
                        type="button"
                        className="navbar-menu-link"
                        onClick={openMenu}
                    >
                        {content[language].menu}
                    </button>
                </li>


                {/* Contact */}

                <li>
                    <a href="#contact">
                        {content[language].contact}
                    </a>
                </li>

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


                    {/* Menu */}

                    <button
                        type="button"
                        className="mobile-menu-link"
                        onClick={() => {
                            closeMobileMenu();
                            openMenu();
                        }}
                    >
                        {content[language].menu}
                    </button>


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