import { useRef, useState } from "react";

import "../styles/Gallery.css";
import { useLanguage } from "../context/LanguageContext";

import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery6 from "../assets/images/gallery6.webp";
import gallery7 from "../assets/images/gallery7.webp";
import gallery8 from "../assets/images/gallery8.webp";
import gallery9 from "../assets/images/gallery9.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

function Gallery() {
    const { language } = useLanguage();

    const mobileSwiperRef = useRef(null);
    const [desktopPage, setDesktopPage] = useState(0);

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
        gallery9,
        gallery4,
        gallery5,
        gallery7,
        gallery6,
        gallery8,
        gallery3,
    ];

    // Divide images into groups of six for desktop
    const desktopPages = [];

    for (let i = 0; i < galleryImages.length; i += 6) {
        desktopPages.push(galleryImages.slice(i, i + 6));
    }

    // Desktop navigation
    const handleDesktopPrev = () => {
        setDesktopPage((currentPage) =>
            Math.max(currentPage - 1, 0)
        );
    };

    const handleDesktopNext = () => {
        setDesktopPage((currentPage) =>
            Math.min(currentPage + 1, desktopPages.length - 1)
        );
    };

    return (
        <section className="gallery" id="gallery">
            <span className="gallery-subtitle">
                {content[language].subtitle}
            </span>

            <h2 className="gallery-title">
                {content[language].title}
            </h2>

            <p className="gallery-description">
                {content[language].description}
            </p>

            {/* DESKTOP GALLERY */}

            <div className="gallery-carousel-wrapper gallery-desktop">
                <button
                    className="gallery-arrow"
                    aria-label="Previous images"
                    type="button"
                    onClick={handleDesktopPrev}
                    disabled={desktopPage === 0}
                >
                    ←
                </button>

                <div className="gallery-grid">
                    <div
                        key={desktopPage}
                        className="gallery-page-grid gallery-page-transition"
                    >
                        {desktopPages[desktopPage].map((image, index) => (
                            <div
                                className="gallery-card"
                                key={`${desktopPage}-${index}`}
                            >
                                <img
                                    src={image}
                                    alt={`Miramar gallery ${desktopPage * 6 + index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="gallery-arrow"
                    aria-label="Next images"
                    type="button"
                    onClick={handleDesktopNext}
                    disabled={desktopPage === desktopPages.length - 1}
                >
                    →
                </button>
            </div>

            {/* TABLET AND MOBILE COVERFLOW */}

            <div className="gallery-coverflow-wrapper">
                <button
                    className="gallery-arrow gallery-coverflow-prev"
                    aria-label="Previous image"
                    type="button"
                    onClick={() => mobileSwiperRef.current?.slidePrev()}
                >
                    ←
                </button>

                <Swiper
                    modules={[EffectCoverflow]}
                    onSwiper={(swiper) => {
                        mobileSwiperRef.current = swiper;
                    }}
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView={1.5}
                    spaceBetween={10}
                    grabCursor={true}
                    watchOverflow={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1.5,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        577: {
                            slidesPerView: 1.7,
                            spaceBetween: 20,
                        },
                    }}
                    className="gallery-coverflow"
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="gallery-card">
                                <img
                                    src={image}
                                    alt={`Miramar gallery ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="gallery-arrow gallery-coverflow-next"
                    aria-label="Next image"
                    type="button"
                    onClick={() => mobileSwiperRef.current?.slideNext()}
                >
                    →
                </button>
            </div>
        </section>
    );
}

export default Gallery;