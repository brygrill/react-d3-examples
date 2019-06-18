import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';

const D3 = props => {
  const animate = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={animate}>
      <svg width={props.width} height={props.height}>
        <g
          ref={props.targetRef}
          transform={`translate(${props.outerRadius} ${props.outerRadius})`}
        />
      </svg>
    </animated.div>
  );
};

D3.propTypes = {
  targetRef: PropTypes.object.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  outerRadius: PropTypes.number.isRequired,
};

export default D3;
