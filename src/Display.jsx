import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDisplay = styled.div`
  border: none;
  background: #444;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  height: 60px;
`;

function Display(props) {
  const { expression } = props;

  return <StyledDisplay>{expression}</StyledDisplay>;
}

Display.propTypes = {
  expression: PropTypes.string.isRequired
};

export default Display;
