import React, { useState } from 'react';
import { RadioButtonProps } from './RadioButtonProps.interface';
import './../../../../app/globals.css';
import './RadioButton.css';
import Label from '../../Label';

const RadioButton: React.FC<RadioButtonProps> = ({
  initialChecked = false,
  onChange,
  label,
  name,
  size,
  title,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (onChange) {
      onChange(event.target.checked);
    }
  };
  let inputSize = 'h-4 w-4';
  let indicatorSize = 'h-1/2 w-1/2';
  switch (size) {
    case 'lg':
      inputSize = 'h-8 w-8';
      indicatorSize = 'h-4 w-4';
      break;
    case 'md':
      inputSize = 'h-6 w-6';
      indicatorSize = 'h-3 w-3';
      break;
    case 'sm':
      inputSize = 'h-4 w-4';
      indicatorSize = 'h-1/2 w-1/2';
      break;
    default:
      inputSize = 'h-4 w-4';
      indicatorSize = 'h-1/2 w-1/2';
      break;
  }

  let setTitle = name;
  title && (setTitle = title);
  return (
    <>
      <div className="inline-flex items-center">
        <div className="relative flex cursor-pointer items-center">
          <input
            title="radio button"
            checked={checked}
            name={name}
            onClick={(e: any) => handleChange(e)}
            type="radio"
            placeholder=""
            className={`peer ${inputSize} z-auto cursor-pointer appearance-none rounded-full border border-line checked:border-line-dark`}
          />
          <span
            className={`absolute left-1/2 top-1/2 z-[-9] ${indicatorSize} -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-line-dark opacity-0 transition-opacity duration-200 peer-checked:opacity-100`}
          ></span>
        </div>
        <Label htmlFor={''} customClassNames="mx-2">
          {label}
        </Label>
      </div>
    </>
  );
};

export default RadioButton;
