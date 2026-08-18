import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { PHONE_NUMBER } from "../constants/phone";
import "../styles/Footer.css";

function Footer() {
    const { language } = useLanguage();

    const content = {
        en: {
            description:
                "Mediterranean flavors, handcrafted cocktails and unforgettable moments by the sea.",

            explore: "Explore",
            story: "Our Story",
            gallery: "Gallery",
            contact: "Contact",

            connect: "Connect",

            reservations: "RESERVATIONS",
            reservationTitle: "Join us by the sea.",
            reserve: "Reserve a Table",

            rights: "All rights reserved.",
        },

        gr: {
            description:
                "Μεσογειακές γεύσεις, signature cocktails και αξέχαστες στιγμές δίπλα στη θάλασσα.",

            explore: "Εξερευνήστε",
            story: "Η Ιστορία μας",
            gallery: "Gallery",
            contact: "Επικοινωνία",

            connect: "Επικοινωνία",

            reservations: "ΚΡΑΤΗΣΕΙΣ",
            reservationTitle: "Ελάτε κοντά στη θάλασσα.",
            reserve: "Κάντε κράτηση",

            rights: "Με επιφύλαξη παντός δικαιώματος.",
        },
    };

    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-brand">

                    <Link to="/">
                        <h2>MIRAMÁR</h2>
                        <span>SEACOAST</span>
                    </Link>

                    <p>
                        {content[language].description}
                    </p>

                </div>

                <div className="footer-links">

                    <h3>
                        {content[language].explore}
                    </h3>

                    <a href="#about">
                        {content[language].story}
                    </a>

                    <a href="#gallery">
                        {content[language].gallery}
                    </a>

                    <a href="#contact">
                        {content[language].contact}
                    </a>

                </div>

                <div className="footer-contact">

                    <h3>
                        {content[language].connect}
                    </h3>

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

                    <span>
                        {content[language].reservations}
                    </span>

                    <h3>
                        {content[language].reservationTitle}
                    </h3>

                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="footer-reserve-button"
                    >
                        {content[language].reserve}
                    </a>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © {new Date().getFullYear()} Miramár Seacoast.{" "}
                    {content[language].rights}
                </p>

            </div>

        </footer>
    );
}

export default Footer;