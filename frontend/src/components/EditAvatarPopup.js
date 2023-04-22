import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose }) {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Change profile picture"
      name="edit-avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        name="url"
        id="avatar-link"
        className="popup__input popup__input_type_link"
        placeholder="Image URL"
        required
        ref={inputRef}
      />
      <span className="popup__error" id="avatar-link-error">
        Placeholder
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
