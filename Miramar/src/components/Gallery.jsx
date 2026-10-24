import "../styles/Gallery.css";
import { useLanguage } from "../context/LanguageContext";

import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery6 from "../assets/images/gallery6.webp";

function Gallery() {
    const { language } = useLanguage();

    const content = {
        en: {
            subtitle: "GALLERY",
            title: "Moments by the Sea",
            description:
                "Discover the atmosphere, the cuisine and the unforgettable moments that make Miramar a destination by the sea.",
        },

        gr: {
            subtitle: "GALLERY",
            title: "Στιγμές δίπλα στη θάλασσα",
            description:
                "Ανακαλύψτε την ατμόσφαιρα, τη γαστρονομία και τις αξέχαστες στιγμές που κάνουν το Miramar έναν μοναδικό προορισμό δίπλα στη θάλασσα.",
        },
    };

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
                {content[language].subtitle}
            </span>

            <h2 className="gallery-title">
                {content[language].title}
            </h2>

            <p className="gallery-description">
                {content[language].description}
            </p>

            <div className="gallery-grid">

                {galleryImages.map((image, index) => (

                    <div
                        className="gallery-card"
                        key={index}
                    >

                        <img
                            src={image}
                            alt={`Miramar gallery ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                        />

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Gallery;