import React from 'react';
import Header from './Header';
import Achievements from './sections/Achievements';
import WorksSlider from './sections/WorksSlider';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Achievements/>
        <WorksSlider/>
      </main>
    </div>
  );
}

export default App;