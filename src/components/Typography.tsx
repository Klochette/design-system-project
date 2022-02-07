import React from 'react';
import { Link } from 'react-router-dom';

type TypographyProps = JSX.ElementChildrenAttribute & {
  variant?: 'h1' | 'p' | 'link';
  link?: string;
  textAlign?: 'center';
};

const Typography = ({
  children,
  variant,
  link,
  textAlign
}: TypographyProps): JSX.Element => {
  const textAlignClassName = textAlign ? ` textAlign__${textAlign}` : '';
  if (variant === 'h1')
    return (
      <h1 className={`typography typography__h1${textAlignClassName}`}>
        {children}
      </h1>
    );
  else if (variant === 'link' && link)
    return (
      <Link
        to={link}
        className={`typography typography__a${textAlignClassName}`}
      >
        {children}
      </Link>
    );
  else
    return (
      <p className={`typography typography__p${textAlignClassName}`}>
        {children}
      </p>
    );
};

export default Typography;
