import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onDeleteClick, onCardLike }) {
  const user = useContext(CurrentUserContext);

  const isOwn = card.owner._id === user._id;

  const cardDeleteButtonClassName = `card__delete ${
    isOwn ? "card__delete-button_active" : "card__delete-button_hidden"
  }`;
  const isLiked = card.likes.some((i) => i._id === user._id);

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onDeleteClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <li className="card">
      <button
        type="button"
        aria-label="Delete"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <img
        className="card__item"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__description">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__like-container">
          <button
            className={`card__like ${isLiked && "card__like_active"}`}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
