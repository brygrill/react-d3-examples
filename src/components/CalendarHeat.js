import React, { useEffect, useRef } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import D3 from './D3';

import PieChart from '../d3/pie';

// CREDIT/THANKS: https://link.medium.com/MHTCm0puvX

const Pie = props => {
  // ref
  const ref = useRef(null);

  // lifecycle
  useEffect(() => {
    new PieChart(ref, props);
  }, [props]);

  return (
    <>
      <Header content="Calendar Heatmap" attached="top" />
      <Segment textAlign="center" attached>
        <D3
          targetRef={ref}
          width={props.width}
          height={props.height}
          outerRadius={props.outerRadius}
        />
      </Segment>
    </>
  );
};

Pie.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Pie;
