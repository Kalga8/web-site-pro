import { useTranslation } from 'react-i18next';

function LanguageSwitcher () {
    const { i18n } = useTranslation();

    const switchLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className ="languages">
            <div className="buttonsSwitchLangages">
            <button className="buttonFr" onClick={() => switchLanguage('fr')}>FR</button>
            <button className="buttonEn" onClick={() => switchLanguage('en')}>EN</button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;