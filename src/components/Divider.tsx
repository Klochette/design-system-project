import React from 'react';

const Divider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  return (
    <div className="divider">
      <div className="divider__text">
        <span className="divider__text--background">{children}</span>
      </div>
    </div>
  );
};

export default Divider;
