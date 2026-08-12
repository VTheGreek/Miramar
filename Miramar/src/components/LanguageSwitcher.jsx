import { useLanguage } from "../context/LanguageContext";
import "../styles/LanguageSwitcher.css";

function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-switcher">

            <button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
            >
                EN
            </button>

            <span>·</span>

            <button
                className={language === "gr" ? "active" : ""}
                onClick={() => setLanguage("gr")}
            >
                GR
            </button>

        </div>
    );
}

export default LanguageSwitcher;