import { Link } from "react-router-dom";

function Navbar() {
    const navLinks = [
        {
            label: 'home',
            to: '/',
            type: 'route'
        },
        {
            label: 'gallery',
            to: '#gallery',
            type: 'scroll'
        },
        {
            label: 'menu',
            to: '/menu',
            type: 'route'
        },
        {
            label: 'contact',
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
        <nav>
            <ul>
                {links}
            </ul>    
        </nav>
    )
}

export default Navbar;