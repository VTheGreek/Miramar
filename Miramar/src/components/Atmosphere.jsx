import { useRef } from "react";

import { useLanguage } from "../context/LanguageContext";
import "../styles/Atmosphere.css";

import atmosphereVideo1 from "../assets/atmosphere/miramar-1-compressed.mp4";
import atmosphereVideo2 from "../assets/atmosphere/miramar-2-compressed.mp4";

import poster1 from "../assets/atmosphere/miramar-1-poster.webp";
import poster2 from "../assets/atmosphere/miramar-2-poster.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

function Atmosphere() {
    const { language } = useLanguage();

    const mobileSwiperRef = useRef(null);

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

            {/* DESKTOP VIDEO GALLERY */}

            <div className="atmosphere-desktop">
                <div className="atmosphere-video-grid">
                    {videos.map((video, index) => (
                        <div
                            className="atmosphere-video"
                            key={index}
                        >
                            <video
                                src={video.src}
                                poster={video.poster}
                                controls
                                playsInline
                                preload="none"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* TABLET AND MOBILE COVERFLOW */}

            <div className="atmosphere-coverflow-wrapper">
                <button
                    className="atmosphere-arrow atmosphere-coverflow-prev"
                    type="button"
                    aria-label="Previous video"
                    onClick={() =>
                        mobileSwiperRef.current?.slidePrev()
                    }
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
                    className="atmosphere-coverflow"
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
                    className="atmosphere-arrow atmosphere-coverflow-next"
                    type="button"
                    aria-label="Next video"
                    onClick={() =>
                        mobileSwiperRef.current?.slideNext()
                    }
                >
                    →
                </button>
            </div>
        </section>
    );
}

export default Atmosphere;