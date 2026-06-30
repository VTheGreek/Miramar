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

    const links = navLinks.map(link => {
        if (link.type === 'route') {
            return <Link to={link.to}>
                        {link.label}
                    </Link>
        }
    })
    return(
        <nav>
            {links}
        </nav>
    )
}

export default Navbar;