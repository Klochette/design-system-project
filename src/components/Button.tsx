import React from 'react';

type ButtonProps = JSX.ElementChildrenAttribute & {
  variant?: 'filled' | 'outlined' | 'link';
  color?: 'primary' | 'secondary' | 'tertiary' | 'fourthly';
  uppercase?: boolean;
  fullWidth?: boolean;
};

const Button = ({
  variant,
  color,
  uppercase,
  fullWidth,
  children
}: ButtonProps): JSX.Element => {
  const variantForClassName = variant ?? 'filled';
  const colorForClassName = color ?? 'primary';
  const uppercaseForClassName = uppercase ? ' text__capitalize' : '';
  const fullWidthForClassName = fullWidth ? ' full__width' : '';
  const className = `button__${variantForClassName} button__${variantForClassName}--${colorForClassName}${fullWidthForClassName}${uppercaseForClassName}`;
  return <button className={className}>{children}</button>;
};

export default Button;
