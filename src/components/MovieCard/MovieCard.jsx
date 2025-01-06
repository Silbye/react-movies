/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./MovieCard.css";

export default function MovieCard(props) {
  return (
    <Link to={"/film/" + props.article.id} className="content-cards__item">
      <div className="content-cards__item--img">
        <img src={props.article.image} alt={props.article.title} />
      </div>
      <div className="content-cards__item--title">
        <h5>{props.article.title},</h5>
        <span>{props.article.original}</span>
      </div>
      <p className="content-cards__item--description">
        {props.article.category}
      </p>
      <p className="content-cards__item--rating">{props.article.rating}</p>
    </Link>
  );
}
