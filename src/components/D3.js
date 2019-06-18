import React from 'react';
import PropTypes from 'prop-types';

const D3 = props => {
  return (
    <svg width={props.width} height={props.height}>
    <g
      ref={props.targetRef}
      transform={`translate(${props.outerRadius} ${props.outerRadius})`}
    />
  </svg>
  );
};

D3.propTypes = {
  targetRef: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
};

export default D3;