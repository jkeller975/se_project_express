import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onAddPlace, onClose }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
      title="New Place"
      name="new-card"
    >
      <input
        type="text"
        name="title"
        id="place-name"
        className="popup__input popup__input_type_title"
        placeholder="Title"
        maxLength="30"
        minLength="2"
        value={name}
        onChange={handleNameChange}
        required
      />
      <span className="popup__error" id="place-name-error">
        Placeholder
      </span>
      <input
        type="url"
        name="url"
        id="place-link"
        className="popup__input popup__input_type_link"
        placeholder="Image URL"
        value={link}
        onChange={handleLinkChange}
        required
      />
      <span className="popup__error" id="place-link-error">
        Placeholder
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
