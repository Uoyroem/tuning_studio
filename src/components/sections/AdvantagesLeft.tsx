import React, {useState} from 'react';
import Section from './Section';
import Container from '../ui/Container';
import Slider, {SlideItem} from '../ui/Slider';
import './Advantages.scss';
import Dots from '../ui/Dots';

const AdvantagesLeft = () => {
  const [slideItems,] = useState<SlideItem[]>([
    {
      id: 1,
      image: require('../../images/advantages/1.png'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh feugiat est. Consectetur lectus.'
    }
  ]);

  return (
    <Section>
      <Container>
        <div className="advantages-left">
          <div className="advantages">
            <div className="advantages__item">
              <div className="advantages__header">
                <img src={require('../../images/advantages/icons/1.png')} alt="" className="advantages__icon"/>
                <h3 className="advantages__title">материалы от лучших компаний</h3>
              </div>
              <p className="advantages__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est,
                molestie proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
              </p>
            </div>
            <Dots align="center"/>
            <div className="advantages__item">
              <div className="advantages__header">
                <img src={require('../../images/advantages/icons/2.png')} alt="" className="advantages__icon"/>
                <h3 className="advantages__title">Опытные мастера</h3>
              </div>
              <p className="advantages__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Et donec elementum egestas vitae ullamcorper. Amet volutpat ornare pharetra amet adipiscing orci,
                lectus aenean ultricies. Erat viverra eget blandit ornare. Molestie ipsum commodo faucibus rhoncus
              </p>
            </div>
            <Dots align="center"/>
            <div className="advantages__item">
              <div className="advantages__header">
                <img src={require('../../images/advantages/icons/3.png')} alt="" className="advantages__icon"/>
                <h3 className="advantages__title">Гарантия на все виды работы</h3>
              </div>
              <p className="advantages__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.
              </p>
            </div>
          </div>
          <Slider slideItems={slideItems} variant={'photo'}/>
        </div>
      </Container>
    </Section>
  );
};

export default AdvantagesLeft;