import { Link } from "react-router-dom";
import logo from "../assets/logo/miramar-logo.png";
import "../styles/Navbar.css";

function Navbar() {
    const navLinks = [
        {
            label: 'Home',
            to: '/',
            type: 'route'
        },
        {
            label: 'Gallery',
            to: '#gallery',
            type: 'scroll'
        },
        {
            label: 'Menu',
            to: '/menu',
            type: 'route'
        },
        {
            label: 'Contact',
            to: '#contact',
            type: 'scroll'
        }
    ]

    const routeLinks = navLinks.filter(
        routeLink => routeLink.type === 'route'
    )

    const links = routeLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.to}>
                        {link.label}
                  </Link>
                </li>
    ))
    return(
        <nav className="navbar">
           <div className="navbar-logo">
            <Link to='/'> 
                <img src={logo} alt="Miramar Seacoast Logo"/>
            </Link>
           </div>

           <div className="navbar-menu"> 
              <ul>
                {links}
              </ul>
           </div>

           <div className="navbar-reserve"> 
             <a href="tel:+306948969004">Reserve</a>
           </div>
        </nav>
    )
}

export default Navbar;