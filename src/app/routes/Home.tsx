import React from 'react';

const Home = (): JSX.Element => {
  return (
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
  );
};

export default Home;
