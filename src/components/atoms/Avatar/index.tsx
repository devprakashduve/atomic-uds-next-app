import React from 'react';
import { AvatarProps } from './AvatarProps.interface';

import './Avatar.css';
import { classNames } from '@/Components/utilities/componentsMethods';
import Img from '../Img';

const Avatar: React.FC<AvatarProps> = ({
  src = '/images/avatar.jpg',
  alt,
  size = 16,
  customClassNames = '',
  width = 105,
  height = 105,
  circle = false,
  rounded = false,
}) => {
  const containerClasses = classNames(
    `w-${size} h-${size}`,
    `overflow-hidden ${rounded ? 'rounded' : ''} ${circle ? 'rounded-full' : ''} ${customClassNames}`
  );
  const imgClasses = classNames('w-full h-full object-cover', '');

  return (
    <div className={containerClasses}>
      <Img
        customClassNames={imgClasses}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Avatar;
