import "../styles/Hero.css";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "EXPERIENCE MIRAMÁR",
            description:
                "Distinctive flavors, handcrafted cocktails and unforgettable seaside moments in Ierissos.",
        },

        gr: {
            title: "ΖΗΣΤΕ ΤΗΝ ΕΜΠΕΙΡΙΑ ΤΟΥ MIRAMÁR",
            description:
                "Ξεχωριστές γεύσεις, χειροποίητα cocktails και αξέχαστες στιγμές δίπλα στη θάλασσα στην Ιερισσό.",
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
            </div>
        </section>
    );
}

export default Hero;