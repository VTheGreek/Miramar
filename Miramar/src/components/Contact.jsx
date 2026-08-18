import { useLanguage } from "../context/LanguageContext";
import { PHONE_NUMBER } from "../constants/phone";
import "../styles/Contact.css";

function Contact() {
    const { language } = useLanguage();

    const content = {
        en: {
            subtitle: "VISIT US",
            title: "Your table by the sea awaits.",
            description:
                "Join us at Miramár Seacoast for Mediterranean flavors, refreshing cocktails and unforgettable moments by the sea.",
            location: "Location",
            reservations: "Reservations",
            instagram: "Instagram",
            reserve: "Reserve a Table",
        },

        gr: {
            subtitle: "ΕΠΙΣΚΕΦΘΕΙΤΕ ΜΑΣ",
            title: "Το τραπέζι σας δίπλα στη θάλασσα σας περιμένει.",
            description:
                "Ελάτε στο Miramár Seacoast και απολαύστε μεσογειακές γεύσεις, δροσιστικά cocktails και αξέχαστες στιγμές δίπλα στη θάλασσα.",
            location: "Τοποθεσία",
            reservations: "Κρατήσεις",
            instagram: "Instagram",
            reserve: "Κάντε κράτηση",
        },
    };

    return (
        <section className="contact" id="contact">

            <div className="contact-content">

                <span className="contact-subtitle">
                    {content[language].subtitle}
                </span>

                <h2 className="contact-title">
                    {content[language].title}
                </h2>

                <p className="contact-description">
                    {content[language].description}
                </p>

                <div className="contact-details">

                    <div>
                        <span>
                            {content[language].location}
                        </span>

                        <p>
                            Miramár Seacoast
                        </p>
                    </div>

                    <div>
                        <span>
                            {content[language].reservations}
                        </span>

                        <a href={`tel:${PHONE_NUMBER}`}>
                            {PHONE_NUMBER}
                        </a>
                    </div>

                    <div>
                        <span>
                            {content[language].instagram}
                        </span>

                        <a
                            href="https://www.instagram.com/miramar.seacoast/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @miramar.seacoast
                        </a>
                    </div>

                </div>

                <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="contact-reserve"
                >
                    {content[language].reserve}
                </a>

            </div>

            <div className="contact-map">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043.6272382707434!2d23.877363587538294!3d40.40179225545166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a8c5047598e723%3A0x27b7cabff1cf6c39!2sMiramar%20Seacoast!5e0!3m2!1sel!2sgr!4v1786027165022!5m2!1sel!2sgr"
                    title="Miramar Seacoast location"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />

            </div>

        </section>
    );
}

export default Contact;