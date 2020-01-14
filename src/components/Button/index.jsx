import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styles';

function Button(props) {
  const { id, value, type, handleSetExpression, text = null } = props;

  const handleExpression = e => {
    handleSetExpression(e, value);
  };

  return (
    <StyledButton id={id} type={type} onClick={handleExpression}>
      {text || value}
    </StyledButton>
  );
}

Button.defaultProps = { text: null };

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleSetExpression: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default Button;
