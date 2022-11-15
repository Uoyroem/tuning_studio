import React, {useState} from 'react';
import Section from './Section';
import Container from '../ui/Container';
import Slider, {SlideItem} from '../ui/Slider';

const WorksSlider = () => {
  const [sliderItems,] = useState<SlideItem[]>([
    {
      id: 1,
      image: require('../../images/works/1.png'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.1'
    },
    {
      id: 2,
      image: require('../../images/works/2.png'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.2'
    },
    {
      id: 3,
      image: require('../../images/works/3.png'),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.3'
    },
    {
      id: 4,
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.4'
    },
    {
      id: 5,
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.5'
    },
    {
      id: 6,
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.6'
    },
    {
      id: 7,
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.7'
    },
    {
      id: 8,
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.8'
    },
    {
      id: 9,
      image: '',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate laoreet sapien a sit ante.9'
    }
  ]);

  return (
    <Section>
      <Container>
        <Slider slideItems={sliderItems} step={3} variant="text"/>
      </Container>
    </Section>
  );
};

export default WorksSlider;