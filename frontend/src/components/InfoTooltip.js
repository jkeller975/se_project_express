import successIcon from "../images/success-icon.svg";
import errorIcon from "../images/error-icon.svg";

function InfoTooltip({ isOpen, onClose, status }) {
  return (
    <div
      className={`popup popup_type_tooltip ${isOpen && "popup_opened"}`}
      onClick={onClose}
    >
      <div className="popup__container popup__container_tooltip">
        <div className="popup__form" noValidate>
          <button
            type="button"
            aria-label="Close"
            className="popup__close"
          ></button>
          {status === "success" ? (
            <div className="popup__info">
              <img className="popup__icon" src={successIcon} alt="Success!" />
              <p className="popup__status-message">
                Success! You have now been registered.
              </p>
            </div>
          ) : (
            <div>
              <img
                className="popup__icon"
                src={errorIcon}
                alt="Opps, something went wrong!"
              />
              <p className="popup__status-message">
                Oops, something went wrong! Please try again.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
