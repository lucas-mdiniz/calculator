import React from 'react';
import PropTypes from 'prop-types';
import StyledDisplay from './styles';

function Display(props) {
  const { expression } = props;

  return <StyledDisplay id="display">{expression}</StyledDisplay>;
}

Display.propTypes = {
  expression: PropTypes.string.isRequired
};

export default Display;
