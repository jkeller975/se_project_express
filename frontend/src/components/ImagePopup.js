import React from "react";

function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_image ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__content-image">
        <button
          type="button"
          aria-label="Close"
          className="popup__close"
          onClick={onClose}
        ></button>

        <img className="popup__image" src={card && card.link} alt={card.name} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
