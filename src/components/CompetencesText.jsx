import { useTranslation, Trans } from "react-i18next";

function CompetencesText () {
    const { t } = useTranslation();
    return (
    <div className="competencesContainer">
            
        <h2> {t('competences.title', "MES COMPÉTENCES")}</h2>

        <div className="competencesText">
            <p>
                <Trans i18nKey="competences.text">
                {/* Le contenu ici sert de fallback si la clé n'est pas trouvée */}
                Je maîtrise les outils de création visuelle et vidéo tels que Photoshop, Lightroom, Première Pro et Canva. Formée au développement web, je suis à l’aise avec le code (HTML, CSS, bases de JavaScript) en plus de la gestion de sites sous WordPress. Je suis également à l’aise avec la gestion de sites web via WordPress, ainsi qu’avec les outils collaboratifs comme la suite Microsoft, Slack et ChatGPT. <br/> Mon expérience en communication digitale m’a permis de développer des contenus variés, adaptés à différents publics et supports. Créative, organisée et autonome, je sais m’adapter aux besoins d’une équipe ou d’un projet.
                </Trans>
            </p>
        </div>
    </div>
    )
}

export default CompetencesText