import menuData from "../data/menuData";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
    return (
        <main className="menu-page">

            <header className="menu-header">

                <span>
                    MIRAMAR SEACOAST
                </span>

                <h1>
                    Our Menu
                </h1>

                <p>
                    Mediterranean flavors, fresh ingredients
                    and carefully crafted drinks.
                </p>

            </header>

            <section
                className="menu-section"
                id="food"
            >

                <h2>
                    {menuData.allTimeMenu.title}
                </h2>

                {menuData.allTimeMenu.categories.map((category) => (

                    <div
                        className="menu-category"
                        key={category.name}
                    >

                        <h3 className="menu-category-title">
                            {category.name}
                        </h3>

                        <div className="menu-items">

                            {category.items.map((item) => (

                                <MenuItem
                                    key={item.name}
                                    item={item}
                                />

                            ))}

                        </div>

                    </div>

                ))}

            </section>

        </main>
    );
}

export default Menu;