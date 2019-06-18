import React, { useEffect, useRef, useState } from 'react';
import { Segment, Header } from 'semantic-ui-react';
// import * as d3 from 'd3';
import PropTypes from 'prop-types';

import PieElement from './d3/pie';

// CREDIT/THANKS: https://link.medium.com/MHTCm0puvX

const Pie = props => {
  // ref
  const ref = useRef(null);

  // state
  // const [viz, setViz] = useState(null);
  
  // lifecycle
  useEffect(() => {
    new PieElement(ref, props);
  }, [props]);

  return (
    <>
      <Header content="Pie Chart" attached="top" />
      <Segment textAlign="center" attached>
        <svg width={props.width} height={props.height}>
          <g
            ref={ref}
            transform={`translate(${props.outerRadius} ${props.outerRadius})`}
          />
        </svg>
      </Segment>
    </>
  );
};

Pie.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Pie;
