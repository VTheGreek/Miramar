import { Link } from "react-router-dom";
import aboutImage from "../assets/about/About.png";
import "../styles/About.css";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-content">

                <span className="about-subtitle">
                    OUR STORY
                </span>

                <h2 className="about-title">
                    Mediterranean dining with breathtaking sea views.
                </h2>

                <p className="about-description">
                    Nestled on the coast, Miramar Seacoast offers an unforgettable
                    dining experience where fresh Mediterranean flavors meet
                    handcrafted cocktails and panoramic views of the sea. Every
                    dish is prepared with carefully selected ingredients to create
                    moments worth sharing with family and friends.
                </p>

                <Link
                    to="/menu"
                    className="about-button"
                >
                    Explore Our Menu
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