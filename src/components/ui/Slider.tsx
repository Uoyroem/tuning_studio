import React, {FC, useState} from 'react';
import './Slider.scss';
import SliderButton, {Sides} from './SliderButton';

export interface SlideItem {
  id: number;
  image: string;
  text: string;
  width?: number;
}

type SliderProps = {
  slideItems: SlideItem[];
  step: number;
  variant: 'text';
};

const TextVariant: FC<SlideItem> = ({image, text, width}) => {
  return (
    <div className="text-variant" style={{width: `${width}%`}}>
      <img className="text-variant__image" src={image} alt=""/>
      <p className="text-variant__text">{text}</p>
    </div>
  );
};

const Slider: FC<SliderProps> = ({slideItems, step, variant}) => {
  if (slideItems.length % step !== 0) throw new Error('The step must be a multiple of the length of the elements.');

  const [offset, setOffset] = useState(0);

  const slide = (side: Sides) => {
    setOffset(prevState => {
      let finalStep;

      if (side === 'left') {
        finalStep = prevState - step;
      } else {
        finalStep = prevState + step;
      }

      if (finalStep < 0) {
        finalStep = slideItems.length - step;
      } else if (finalStep > slideItems.length - step) {
        finalStep = 0;
      }

      return finalStep;
    });
  };

  if (variant === 'text') {
    return (
      <div className="slider">
        <SliderButton className="slider__button-left" slide={slide} side={'left'}/>
        {slideItems.map((slideItem) => <TextVariant key={slideItem.id} {...slideItem} width={slideItem.width == null ? 100 / step : slideItem.width}/>)
                   .filter((_, index) => index >= offset && index < offset + step)}
        <SliderButton className="slider__button-right" slide={slide} side={'right'}/>
      </div>
    );
  }

  return <div>NO VARIANT</div>;
};

export default Slider;