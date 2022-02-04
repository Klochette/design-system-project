import React from 'react';

type ButtonProps = {
  children?: string;
  color?: 'primary' | 'secondary';
  uppercase?: boolean;
  fullWidth?: boolean;
  variant?: 'outlined' | 'link';
};

const Button = (props: ButtonProps): JSX.Element => {
  const classesMaker = () => {
    let classes = `button`;
    classes = props.color
      ? classes + ` button__${props.color}`
      : classes + ` button__primary`;
    classes = props.uppercase ? classes + ` text__capitalize` : classes;
    classes = props.fullWidth ? classes + ` full-width` : classes;
    classes = props.variant ? classes + ` button__${props.variant}` : classes;
    return classes;
  };

  const classNames = classesMaker();

  return <button className={classNames}>{props.children}</button>;
};

export default Button;
