import React from 'react';
import Container from './ui/Container';
import Navigation from './Navigation';
import './Header.scss';
import Button from './ui/Button';
import Dots from './ui/Dots';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Navigation/>
        <div className="info">
          <h1 className="info__title">Car Musc</h1>
          <Dots/>
          <p className="info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci urna amet penatibus.</p>
          <Button>Наши услуги</Button>
        </div>

      </Container>
      <div className="company-info">
        <div className="company-info__item">
          <div className="company-info__title">Адрес: </div>
          <div className="company-info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
        </div>
        <div className="company-info__item">
          <div className="company-info__title">Телефон: </div>
          <div className="company-info__text">
            <div>8 (812) 123-45-67</div>
            <div>8-911-123-45-67</div>
          </div>
        </div>
        <div className="company-info__item">
          <div className="company-info__title">Режим работы: </div>
          <div className="company-info__text">
            <div>пн-пт : 10:00 - 20:00</div>
            <div>сб-вск : 12:00 - 20:00</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;