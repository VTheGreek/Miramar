import "../styles/Menu.css";

function Menu() {
    return (
        <main className="menu-page">

            <iframe
                src="/miramar-menu-2026.pdf"
                title="Miramár Seacoast Menu"
            />

            <a
                href="/miramar-menu-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="menu-open-button"
            >
                Open Menu
            </a>

        </main>
    );
}

export default Menu;