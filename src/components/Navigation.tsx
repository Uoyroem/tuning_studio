import React from 'react';
import './Navigation.scss';
import Menu from './Menu';

const Navigation = () => {

  const preventDefault = (event: any) => event.preventDefault();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><a onClick={preventDefault} href="/">Главная</a></li>
        <li className="navigation__item"><a onClick={preventDefault} href="/">Оклейка автомобилей</a></li>
        <li className="navigation__item"><a onClick={preventDefault} href="/">Детейлинг автомобилей</a></li>
        <li className="navigation__item"><a onClick={preventDefault} href="/">Галерея работ</a></li>
      </ul>
      <Menu/>
    </nav>
  );
};

export default Navigation;