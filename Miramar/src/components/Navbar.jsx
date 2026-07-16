import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { MENU_URL } from "../constants/links";
import { PHONE_NUMBER } from "../constants/phone";

function Navbar() {
    const navLinks = [
        {
            label: "Home",
            to: "/",
            kind: "route",
        },
        {
            label: "Gallery",
            to: "#gallery",
            kind: "scroll",
        },
        {
            label: "Menu",
            to: MENU_URL,
            kind: "external",
        },
        {
            label: "Contact",
            to: "#contact",
            kind: "scroll",
        },
    ];

    return (
        <nav className="navbar">

            <Link to="/" className="navbar-brand">
                <h1>MIRAMAR</h1>
                <span>SEACOAST</span>
            </Link>

            <ul className="navbar-menu">
                {navLinks.map((link) => (
                    <li key={link.label}>
                    
                        {link.kind === "route" && (
                            <Link to={link.to}>
                                {link.label}
                            </Link>
                        )}

                        {link.kind === "scroll" && (
                            <a href={link.to}>
                                {link.label}
                            </a>
                        )}

                        {link.kind === "external" && (
                            <a
                                href={link.to}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </a>
                        )}

                    </li>
                ))}
            </ul>

            <a
                href={`tel:${PHONE_NUMBER}`}
                className="navbar-reserve"
            >
                Reserve a Table
            </a>

        </nav>
    );
}

export default Navbar;