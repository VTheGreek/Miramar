import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import aboutImage from "../assets/about/About.png";
import "../styles/About.css";

function About() {
    const { language } = useLanguage();

    const content = {
        en: {
            subtitle: "OUR STORY",
            title: "Mediterranean dining with breathtaking sea views.",
            description:
                "Nestled on the coast, Miramar Seacoast offers an unforgettable dining experience where fresh Mediterranean flavors meet handcrafted cocktails and panoramic views of the sea. Every dish is prepared with carefully selected ingredients to create moments worth sharing with family and friends.",
            button: "Explore Our Menu",
        },

        gr: {
            subtitle: "Η ΙΣΤΟΡΙΑ ΜΑΣ",
            title: "Μεσογειακή γαστρονομία με θέα που κόβει την ανάσα.",
            description:
                "Στην ακτογραμμή, το Miramar Seacoast προσφέρει μια ξεχωριστή γαστρονομική εμπειρία, όπου οι φρέσκες μεσογειακές γεύσεις συναντούν τα signature cocktails και την πανοραμική θέα στη θάλασσα. Κάθε πιάτο δημιουργείται με προσεκτικά επιλεγμένα υλικά, για στιγμές που αξίζει να μοιράζεστε με την οικογένεια και τους φίλους σας.",
            button: "Ανακαλύψτε το Μενού",
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
                    alt="Miramar Seacoast Restaurant"
                />

            </div>

        </section>
    );
}

export default About;