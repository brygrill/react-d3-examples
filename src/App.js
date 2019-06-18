import React, { useState, useEffect } from 'react';
import { Container, Segment } from 'semantic-ui-react';

import Pie from './Pie';
import genData from './data';

function App() {
  // state
  const [pie, setPie] = useState(genData.pie());

  // functions
  const handleClick = d => {
    console.log(d);
  };

  // lifecycle
  useEffect(() => {
    setInterval(() => {
      setPie(genData.pie());
    }, 10000);
  });

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
      <Segment>Calendar Heatmap</Segment>
    </Container>
  );
}

export default App;
