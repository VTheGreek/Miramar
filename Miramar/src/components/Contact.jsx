import { PHONE_NUMBER } from "../constants/phone";
import "../styles/Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <span className="contact-subtitle">
                    VISIT US
                </span>

                <h2 className="contact-title">
                    Your table by the sea awaits.
                </h2>

                <p className="contact-description">
                    Join us at Miramar Seacoast for Mediterranean flavors,
                    refreshing cocktails and unforgettable moments by the sea.
                </p>

                <div className="contact-details">
                    <div>
                        <span>Location</span>
                        <p>Miramar Seacoast</p>
                    </div>

                    <div>
                        <span>Reservations</span>
                        <a href={`tel:${PHONE_NUMBER}`}>
                            {PHONE_NUMBER}
                        </a>
                    </div>

                    <div>
                        <span>Instagram</span>
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
                    Reserve a Table
                </a>
            </div>

            <div className="contact-map">
                {/* Google Map will go here */}
            </div>
        </section>
    );
}

export default Contact;