import React from 'react';

const Form = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  return (
    <form className="full__width form">
      <div className="form__inputs">{children}</div>
    </form>
  );
};

export default Form;
