import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { email, password };
    onRegister(userData);
  }
  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Sign up</h3>
          <label className="auth-form__input">
            <input
              type="text"
              name="email"
              id="email"
              className="auth-form__textfield"
              placeholder="Email"
              value={email || ""}
              onChange={handleEmailChange}
              required
            />
          </label>
          <label className="auth-form__input">
            <input
              type="password"
              name="password"
              id="password"
              className="auth-form__textfield"
              placeholder="Password"
              value={password || ""}
              onChange={handlePasswordChange}
              required
            />
          </label>
        </div>
        <div className="auth-form__wrapper">
          <button className="auth-form__button" type="submit">
            Sign up
          </button>
          <p className="auth-form__text">
            Already a member?{" "}
            <Link className="auth-form__link" to="/signin">
              Log in here!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
