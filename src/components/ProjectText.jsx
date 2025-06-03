import { useTranslation } from "react-i18next";

function ProjectText({id, description}) {
    let { t } = useTranslation();
    const descriptionKey = `projects.${id}.description`;

    return (
    <div className="textDescription" key={id}>
        <h3> DESCRIPTION </h3>
            <p> {t(descriptionKey, description)} </p>

    </div>
    )
}

export default ProjectText