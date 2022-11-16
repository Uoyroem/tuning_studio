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
  step?: number;
  variant: 'text' | 'photo';
};

const TextVariant: FC<SlideItem> = ({image, text, width}) => {
  return (
    <div className="text-variant" style={{width: `${width}%`}}>
      <img className="text-variant__image" src={image} alt=""/>
      <p className="text-variant__text">{text}</p>
    </div>
  );
};

// Как-то сделано не так как хотелось бы.
const Slider: FC<SliderProps> = ({slideItems, step = 1, variant}) => {
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
      <div className="text-variant-slider">
        <SliderButton className="text-variant-slider__button-left" slide={slide} side="left"/>
        {slideItems.map((slideItem) => <TextVariant key={slideItem.id} {...slideItem} width={slideItem.width == null ? 100 / step : slideItem.width}/>)
                   .filter((_, index) => index >= offset && index < offset + step)}
        <SliderButton className="text-variant-slider__button-right" slide={slide} side="right"/>
      </div>
    );
  } else if (variant === 'photo') {
    if (step !== 1) throw new Error('Stop should be 1.');

    return (
      <div className="photo-variant-slider">
        {slideItems.map((slideItem) => (
          <div key={slideItem.id} className="photo-variant">
            <img className="photo-variant__image" src={slideItem.image} alt=""/>
            <div className="photo-variant__info">
              <SliderButton slide={slide} side="left"/>
              <p className="photo-variant__text">{slideItem.text}</p>
              <SliderButton slide={slide} side="right"/>
            </div>
          </div>
        )).filter((_, index) => index === offset)}
      </div>
    );
  }

  return <div>NO VARIANT</div>;
};

export default Slider;