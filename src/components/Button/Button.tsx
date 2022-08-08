import React from 'react';
import { FC } from 'react';

// local imports
import './style.css';

export interface Props {
  onClick(): void;
  children: React.ReactNode;
  variant?: 'primary' | 'success';
  isDisabled?: boolean;
}

const Button: FC<Props> = ({
  onClick,
  children,
  variant = 'primary',
  isDisabled = false,
}) => {
  const classNames = `button button-${variant}`;

  return (
    <button className={classNames} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
