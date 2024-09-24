import React, { useState } from "react";


function LanguageSwitcher () {
        const switchLanguage = (language) => {
            switch (language) {
                case 'en':
                    setLang('en');
                    i18n.changeLanguage('en');
                    break;
                case 'fr':
                default:
                    setLang('fr');
                    i18n.changeLanguage('fr');
                    break;
            }
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