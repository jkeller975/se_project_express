import React from "react";
import Card from "./Card";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  cards,
  onDeleteClick,
  onCardLike,
}) {
  const user = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <div
            className="profile__image-edit"
            onClick={onEditAvatarClick}
          ></div>
          <img src={user.avatar} className="profile__image" alt="Profile Pic" />
        </div>
        <div className="profile__info">
          <div className="profile__name-edit">
            <h1 className="profile__name">{user.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfileClick}
            ></button>
          </div>
          <p className="profile__description">{user.about}</p>
        </div>
        <button
          className="profile__add"
          type="button"
          onClick={onAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={onCardClick}
              onDeleteClick={onDeleteClick}
              onCardLike={onCardLike}
              key={card._id}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
