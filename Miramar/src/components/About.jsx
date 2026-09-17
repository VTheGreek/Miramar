import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import aboutImage from "../assets/about/About.png";
import "../styles/About.css";

function About() {
    const { language } = useLanguage();

    const content = {
        en: {
            subtitle: "OUR STORY",
            title: "Distinctive flavors with breathtaking sea views.",
            description:
                "Located in Ierissos, Halkidiki, Miramár Seacoast offers an unforgettable dining experience where carefully crafted dishes meet handcrafted cocktails and panoramic views of the sea. Every dish is prepared with carefully selected ingredients, creating moments worth sharing with family and friends.",
            button: "Explore Our Menu",
            imageAlt: "Miramár Seacoast restaurant in Ierissos, Halkidiki",
        },

        gr: {
            subtitle: "Η ΙΣΤΟΡΙΑ ΜΑΣ",
            title: "Ξεχωριστές γεύσεις με θέα που κόβει την ανάσα στη θάλασσα.",
            description:
                "Στην Ιερισσό Χαλκιδικής, το Miramár Seacoast προσφέρει μια ξεχωριστή γαστρονομική εμπειρία, όπου προσεγμένα πιάτα συναντούν χειροποίητα cocktails και την πανοραμική θέα στη θάλασσα. Κάθε πιάτο δημιουργείται με προσεκτικά επιλεγμένα υλικά, προσφέροντας στιγμές που αξίζει να μοιραστείτε με την οικογένεια και τους φίλους σας.",
            button: "Ανακαλύψτε το Μενού",
            imageAlt: "Miramár Seacoast εστιατόριο στην Ιερισσό Χαλκιδικής",
        },
    };

    return (
        <section className="about" id="about">

            <div className="about-content">

                <span className="about-subtitle">
                    {content[language].subtitle}
                </span>

                <h2 className="about-title">
                    {content[language].title}
                </h2>

                <p className="about-description">
                    {content[language].description}
                </p>

                <Link
                    to="/menu"
                    className="about-button"
                >
                    {content[language].button}
                </Link>

            </div>

            <div className="about-image">

                <img
                    src={aboutImage}
                    alt={content[language].imageAlt}
                />

            </div>

        </section>
    );
}

export default About;