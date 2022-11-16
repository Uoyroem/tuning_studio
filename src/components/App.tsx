import React from 'react';
import Header from './Header';
import Achievements from './sections/Achievements';
import WorksSlider from './sections/WorksSlider';
import AdvantagesLeft from './sections/AdvantagesLeft';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Achievements/>
        <WorksSlider/>
        <AdvantagesLeft/>
      </main>
    </div>
  );
}

export default App;