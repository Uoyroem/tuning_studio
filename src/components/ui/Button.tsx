import React, {ButtonHTMLAttributes, FC} from 'react';
import './Button.scss';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className, ...otherProps}) => {
  return <button className={`button ${className}`} {...otherProps}>{children}</button>
};

export default Button;