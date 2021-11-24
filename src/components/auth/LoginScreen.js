import React from "react";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword, startGoogleLogin } from "../../actions/auth";
import { setError, removeError } from "../../actions/ui";

const LoginScreen = () => {
  const [formValues, handleInputChange] = useForm({
    email: "luis@gmail.com",
    password: "123",
  });

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.ui);

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("Password should be at least 6 characters and match"));
      return false;
    } else {
      dispatch(removeError());
      return true;
    }
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          autoComplete="off"
          className="auth__input"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary btn-block"
        >
          Login
        </button>
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">
          Create a new accout
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;
