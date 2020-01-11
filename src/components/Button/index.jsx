import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

function Button(props) {
  const { id, value, type, handleSetExpression } = props;

  const handleExpression = e => {
    handleSetExpression(e, value);
  };

  return (
    <StyledButton id={id} type={type} onClick={handleExpression}>
      {value}
    </StyledButton>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleSetExpression: PropTypes.func.isRequired
};

export default Button;
