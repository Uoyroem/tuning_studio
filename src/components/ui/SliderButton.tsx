import React, {ButtonHTMLAttributes, FC} from 'react';
import './SliderButton.scss';

export type Sides = 'left' | 'right'

type SliderButtonProps = {
  side: Sides;
  slide?: (side: Sides) => void;
};

const SliderButton: FC<Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'> & SliderButtonProps> = (
  {
    side,
    className,
    slide = undefined,
    ...otherProps
  }
) => {
  return (
    <button
      className={'slider-button ' + className}
      style={{transform: `rotateY(${side === 'left' ? 0 : 180}deg) rotateZ(-45deg)`}}
      onClick={() => slide?.(side)}
      {...otherProps}
    >
      <img className="slider-button__background" src={require("../../images/slide.png")} alt=""/>
    </button>
  );
};

export default SliderButton;