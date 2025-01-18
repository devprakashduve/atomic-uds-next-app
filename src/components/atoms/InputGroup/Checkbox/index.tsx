import React, { useState } from 'react';
import { CheckboxProps } from './CheckboxProps.interface';

const Checkbox = ({
  checked,
  label,
  toggleChecked,
  size = 'md',
  title,
  name,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  let boxSize = 'h-4 w-4';

  switch (size) {
    case 'lg':
      boxSize = 'h-8 w-8';
      break;
    case 'md':
      boxSize = 'h-6 w-6';
      break;
    default:
      boxSize = 'h-4 w-4';
      break;
  }
  let setTitle = name;
  title && (setTitle = title);
  return (
    <>
      <div className="inline-flex items-center">
        <label className="relative flex cursor-pointer items-center">
          <input
            title={setTitle}
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
              toggleChecked(!isChecked);
            }}
            className={`peer cursor-pointer appearance-none rounded border border-line-light shadow transition-all checked:bg-line-dark hover:shadow-md ${boxSize}`}
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-letter-light opacity-0 peer-checked:opacity-100">
            <svg
              className={`${boxSize} text-letter-light dark:text-white`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M5 11.917 9.724 16.5 19 7.5"
              />
            </svg>
          </span>
        </label>
        <label
          htmlFor="react-checkbox"
          className="ml-2 text-lg font-medium text-letter"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
