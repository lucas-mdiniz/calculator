import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: ${props =>
    props.type === 'number' || props.id === 'decimal' ? '#2d2d2d' : '#dc8f00'};
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: ${props => props.id};

  &:hover {
    opacity: 0.7;
  }
`;

function Button(props) {
  const { id, value, type } = props;

  return (
    <StyledButton id={id} type={type}>
      {value}
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
