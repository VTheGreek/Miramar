import { useRef } from "react";

import "../styles/Gallery.css";
import { useLanguage } from "../context/LanguageContext";

import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery6 from "../assets/images/gallery6.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Gallery() {
    const { language } = useLanguage();
    const swiperRef = useRef(null);

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

            <div className="gallery-carousel-wrapper">
                <button
                    className="gallery-arrow gallery-arrow-prev"
                    aria-label="Previous images"
                    type="button"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    &#8592;
                </button>

                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={3}
                    spaceBetween={32}
                    grabCursor={true}
                    watchOverflow={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        577: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        993: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                    }}
                    className="gallery-grid"
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
                    className="gallery-arrow gallery-arrow-next"
                    aria-label="Next images"
                    type="button"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}

export default Gallery;