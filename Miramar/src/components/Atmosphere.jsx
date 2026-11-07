import { useLanguage } from "../context/LanguageContext";
import "../styles/Atmosphere.css";

import atmosphereVideo1 from "../assets/atmosphere/miramar-1-compressed.mp4";
import atmosphereVideo2 from "../assets/atmosphere/miramar-2-compressed.mp4";

import poster1 from "../assets/atmosphere/miramar-1-poster.webp";
import poster2 from "../assets/atmosphere/miramar-2-poster.webp";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Atmosphere() {
    const { language } = useLanguage();
    const swiperRef = useRef(null);

    const content = {
        en: {
            subtitle: "THE ATMOSPHERE",
            title: "Feel the moment.",
            description:
                "From sunset cocktails to unforgettable nights by the sea, experience the atmosphere that makes Miramár Seacoast unique.",
        },

        gr: {
            subtitle: "Η ΑΤΜΟΣΦΑΙΡΑ",
            title: "Ζήστε τη στιγμή.",
            description:
                "Από cocktails στο ηλιοβασίλεμα μέχρι αξέχαστες βραδιές δίπλα στη θάλασσα, ζήστε την ατμόσφαιρα που κάνει το Miramár Seacoast μοναδικό.",
        },
    };

    const videos = [
        {
            src: atmosphereVideo1,
            poster: poster1,
        },
        {
            src: atmosphereVideo2,
            poster: poster2,
        },
    ];

    return (
        <section className="atmosphere" id="atmosphere">
            <div className="atmosphere-header">
                <span className="atmosphere-subtitle">
                    {content[language].subtitle}
                </span>

                <h2 className="atmosphere-title">
                    {content[language].title}
                </h2>

                <p className="atmosphere-description">
                    {content[language].description}
                </p>
            </div>

            <div className="atmosphere-carousel-wrapper">
                <button
                    className="atmosphere-arrow atmosphere-arrow-prev"
                    type="button"
                    aria-label="Previous video"
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    &#8592;
                </button>

                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    slidesPerView={2}
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
                            slidesPerView: 2,
                            spaceBetween: 32,
                        },
                    }}
                    className="atmosphere-swiper"
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="atmosphere-video">
                                <video
                                    src={video.src}
                                    poster={video.poster}
                                    controls
                                    playsInline
                                    preload="none"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    className="atmosphere-arrow atmosphere-arrow-next"
                    type="button"
                    aria-label="Next video"
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}

export default Atmosphere;