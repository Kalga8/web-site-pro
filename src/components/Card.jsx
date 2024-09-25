import { Link } from "react-router-dom";

function Card ({ id, title, cover }) {
  const url = `/project/${id} `;

  return (
    <Link to={url}>
      <div className="cardBlock">
        <div className="imageContainer">
          <img src={cover} alt="" />
        </div>

        <div className="titleCard">
          <h3> {title} </h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;