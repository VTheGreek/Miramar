import { useLanguage } from "../context/LanguageContext";
import "../styles/Atmosphere.css";

import atmosphereVideo1 from "../assets/atmosphere/miramar-1.mp4";
import atmosphereVideo2 from "../assets/atmosphere/miramar-2.mp4";

function Atmosphere() {
    const { language } = useLanguage();

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

    return (
        <section className="atmosphere" id="atmosphere">

            {/* =========================
                HEADER
            ========================= */}

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


            {/* =========================
                VIDEOS
            ========================= */}

            <div className="atmosphere-grid">

                <div className="atmosphere-video">

                    <video
                        src={atmosphereVideo1}
                        controls
                        playsInline
                        preload="metadata"
                    />

                </div>


                <div className="atmosphere-video">

                    <video
                        src={atmosphereVideo2}
                        controls
                        playsInline
                        preload="metadata"
                    />

                </div>

            </div>

        </section>
    );
}

export default Atmosphere;