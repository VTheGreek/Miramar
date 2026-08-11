function MenuItem({ item }) {
    return (
        <article className="menu-item">

            <div className="menu-item-info">

                <h3>
                    {item.name}
                </h3>

                <p>
                    {item.description}
                </p>

            </div>

            <span className="menu-item-price">
                €{item.price}
            </span>

        </article>
    );
}

export default MenuItem;