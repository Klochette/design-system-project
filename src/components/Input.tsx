import React from 'react';

type InputProps = {
  fullWidth?: boolean;
  label: string;
  id: string;
  type: 'email' | 'password' | 'text';
};

const Input = ({ fullWidth, id, type, label }: InputProps): JSX.Element => {
  const fullWidthForClassName = fullWidth ? ' full__width' : '';

  return (
    <div className={`input-group${fullWidthForClassName}`}>
      <input
        type={type}
        id={id}
        className={`input-group__input${fullWidthForClassName}`}
        placeholder={label}
      />
      <label className="input-group__label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Input;
