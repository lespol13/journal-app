import React from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import { startRegister } from "../../actions/auth";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: "Fernando",
    email: "luis@gmail.com",
    password: "123",
    password2: "123456",
  });

  const { name, email, password, password2 } = formValues;

  const { msgError } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegister(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("Password should be at least 6 characters and match"));
      return false;
    } else {
      dispatch(removeError());
      return true;
    }
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          className="auth__input"
          value={name}
          onChange={handleInputChange}
        />
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
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        <Link to="/auth/login" className="link">
          Already register?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
