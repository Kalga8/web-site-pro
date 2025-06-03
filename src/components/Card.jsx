import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Card ({ id, title, cover, alt }) {
  const url = `/project/${id} `;
  let {t} = useTranslation();

  return (
    <Link to={url}>
      <div className="cardBlock">
        <div className="imageContainer">
          <img src={cover} alt={alt} />
        </div>

        <div className="titleCard">
          <h3> {t(`projects.${id}.title`, title)} </h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;