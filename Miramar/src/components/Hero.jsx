import "../styles/Hero.css";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Experience Miramár",
            description:
                "Mediterranean cuisine, handcrafted cocktails and unforgettable seaside moments in Ierissos.",
            button: "Reserve a Table",
        },

        gr: {
            title: "Ζήστε την εμπειρία του Miramár",
            description:
                "Μεσογειακή κουζίνα, signature cocktails και αξέχαστες στιγμές δίπλα στη θάλασσα στην Ιερισσό.",
            button: "Κάντε κράτηση",
        },
    };

    return (
        <section className="hero">

            <div className="hero-content">

                <h1>
                    {content[language].title}
                </h1>

                <p>
                    {content[language].description}
                </p>

                <a href="tel:+306948969004">
                    {content[language].button}
                </a>

            </div>

        </section>
    );
}

export default Hero;