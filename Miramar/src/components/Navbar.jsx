import { Link } from "react-router-dom";
import "../styles/Navbar.css";

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
            to: "/menu",
            kind: "route",
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

                        {link.kind === "route" ? (
                            <Link to={link.to}>
                                {link.label}
                            </Link>
                        ) : (
                            <a href={link.to}>
                                {link.label}
                            </a>
                        )}

                    </li>
                ))}

            </ul>

            <a
                href="tel:+306948969004"
                className="navbar-reserve"
            >
                Reserve a Table
            </a>

        </nav>
    );
}

export default Navbar;