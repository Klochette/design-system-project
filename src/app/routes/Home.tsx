import React from 'react';

const Home = (): JSX.Element => {
  return (
    <>
      <div className="checkbox-group">
        <input type="checkbox" id="cc" className="checkbox-group__input" />
        <label htmlFor="cc" className="checkbox-group__label">
          Rester connecté
        </label>
      </div>

      <input type="submit" className="button__link button__link--primary" />
      <div className="input-group">
        <input
          type="password"
          id="password"
          className="input-group__input"
          placeholder="Password"
        />
        <label className="input-group__label" htmlFor="password">
          Password
        </label>
      </div>
    </>
  );
};

export default Home;
