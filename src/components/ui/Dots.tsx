import React, {FC} from 'react';
import './Dots.scss';

type DotsProps = {
  align?: 'center' | 'right';
}

const Dots: FC<DotsProps> = ({align = 'center'}) => {
  return (
    <div className="dots" style={{justifyContent: align}}>
      <div className="dots__dot"/>
      <div className="dots__dot"/>
      <div className="dots__dot"/>
      <div className="dots__dot"/>
    </div>
  );
};

export default Dots;