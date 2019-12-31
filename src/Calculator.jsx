import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import Display from './Display';

const ButtonsBox = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 60px 60px 60px 60px;
  grid-template-rows: 60px 60px 60px 60px 60px;
  grid-template-areas:
    'clear clear divide multiply'
    'seven eight nine subtract'
    'four five six add'
    'one two three equals'
    'zero zero decimal equals';
  background: #4a4a4a;
`;

const CalculatorWrapper = styled.div`
  border-radius: 10px;
  background: #000;
  padding: 20px;
  box-shadow: 8px 8px 5px 0px rgba(0, 0, 0, 0.53);
`;

function Calculator(props) {
  const { buttons } = props;

  return (
    <CalculatorWrapper>
      <Display />
      <ButtonsBox>
        {buttons.map(button => (
          <Button
            key={button.id}
            id={button.id}
            value={button.value}
            type={button.type}
          />
        ))}
      </ButtonsBox>
    </CalculatorWrapper>
  );
}

Calculator.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default Calculator;
