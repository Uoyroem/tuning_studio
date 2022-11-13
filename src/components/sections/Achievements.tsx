import React from 'react';
import Container from '../ui/Container';
import Dots from '../ui/Dots';
import './Achievements.scss';
import Section from './Section';
import cup from '../../images/cup.png';

const Achievements = () => {
  return (
    <Section>
      <Container>
        <div className="achievements-section">
          <div>
            <h2>наши достижения от кубка россии до чемпионатов мира</h2>
            <Dots align="left"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt
              pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus.
              Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at.
              Sed viverra nulla nam arcu, non iaculis pretium, volutpat.
            </p>
          </div>
          <div className="achievements">
            <div className="achievements__column-1">
              <div className="achievements__item">
                <div className="achievements__number">1</div>
                <p className="achievements__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
              </div>
              <div className="achievements__item">
                <div className="achievements__number">6</div>
                <p className="achievements__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
              </div>
              <div className="achievements__item">
                <div className="achievements__number">2</div>
                <p className="achievements__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
              </div>
              <div className="achievements__item">
                <div className="achievements__number">1</div>
                <p className="achievements__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
              </div>
            </div>
            <div className="achievements__column-2">
              <div className="achievements__item">
                <div className="achievements__number">4</div>
                <p className="achievements__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
              </div>
              <div className="achievements__item">
                <div className="achievements__number">3</div>
                <p className="achievements__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
              </div>
              <div className="achievements__item">
                <div className="achievements__number">1</div>
                <p className="achievements__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
              </div>
              <div className="achievements__item">
                <div className="achievements__cup">
                  <img src={cup} alt="The just cup."/>
                </div>
                <p className="achievements__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui </p>
              </div>
            </div>


          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Achievements;