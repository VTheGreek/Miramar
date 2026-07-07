import "../styles/Gallery.css";

import gallery1 from "../assets/gallery/gallery1.png";
import gallery2 from "../assets/gallery/gallery2.png";
import gallery3 from "../assets/gallery/gallery3.png";
import gallery4 from "../assets/gallery/gallery4.png";
import gallery5 from "../assets/gallery/gallery5.png";
import gallery6 from "../assets/gallery/gallery6.png";

function Gallery() {

    const galleryImages = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ];

    return (

        <section
            className="gallery"
            id="gallery"
        >

            <span className="gallery-subtitle">
                GALLERY
            </span>

            <h2 className="gallery-title">
                Moments by the Sea
            </h2>

            <p className="gallery-description">
                Discover the atmosphere, the cuisine and the unforgettable
                moments that make Miramar a destination by the sea.
            </p>

            <div className="gallery-grid">

                {galleryImages.map((image, index) => (

                    <div
                        className="gallery-card"
                        key={index}
                    >

                        <img
                            src={image}
                            alt={`Gallery ${index + 1}`}
                        />

                    </div>

                ))}

            </div>

        </section>

    );

}

export default Gallery;