import React, { useState, useEffect } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import Pie from './Pie';
import Calendar from './CalendarHeat';

import genData from '../data';

function App() {
  // state
  const [pie] = useState(genData.pie());
  const [cal] = useState(genData.cal());

  // functions
  const handleClick = d => {
    console.log(d);
  };

  // render
  return (
    <Container style={{ paddingTop: '1rem' }}>
      <Pie
        data={pie}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
        handleClick={handleClick}
      />
      <Calendar
        data={cal}
        width={200}
        height={200}
        innerRadius={60}
        outerRadius={100}
        handleClick={handleClick}
      />
    </Container>
  );
}

export default App;
