import React from 'react';

const Signin = () => {
  return (
    <div className="form__container">
      <button
        type="submit"
        className="button__outlined button__outlined--primary full__width"
      >
        S'inscrire avec Google
      </button>
      <form className="full__width form">
        <div className="form__inputs">
          <div className="input-group full__width">
            <input
              type="email"
              id="email"
              className="input-group__input full__width"
              placeholder="Adresse email"
            />
            <label className="input-group__label" htmlFor="email">
              Adresse email
            </label>
          </div>
          <div className="input-group full__width">
            <input
              type="password"
              id="password"
              className="input-group__input full__width"
              placeholder="Password"
            />
            <label className="input-group__label" htmlFor="password">
              Password
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="S'inscrire"
          className="button__filled button__filled--tertiary full__width"
        />
      </form>
    </div>
  );
};

export default Signin;
