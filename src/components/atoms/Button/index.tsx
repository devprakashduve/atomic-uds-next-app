import React from 'react';
import { ButtonProps } from './ButtonProps.interface';
import { classNames } from '@/Components/utilities/componentsMethods';
import './Button.css';

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  variant,
  children,
  rounded = false,
  roundedFull = false,
}) => {
  const buttonClass = classNames(variant);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${buttonClass} ${disabled ? 'btn-disabled' : ''} ${rounded ? 'rounded' : ''} ${roundedFull ? 'rounded-full' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
