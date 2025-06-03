import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./Languages.jsx";

function Header() {
    const { t } = useTranslation();

    return (
        <header>
            <div className="navbar">
                <nav>
                    {/* Utilisez la fonction t() pour traduire le lien */}
                    <Link to="/" > {t('header.digitalCommunicationLink')} </Link>
                </nav>
            </div>
            {/* Intégration des boutons de changement de langue */}
            <LanguageSwitcher />
        </header>
    );
}

export default Header;