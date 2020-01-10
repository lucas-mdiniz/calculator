import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import Display from './Display';
import useExpression from './hooks/useExpression';

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
    'zero decimal delete equals';
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

  const [expression, setExpression] = useExpression('0');

  const handleExpression = (e, value) => {
    e.preventDefault();
    setExpression(value);
  };

  return (
    <CalculatorWrapper>
      <Display expression={expression} />
      <ButtonsBox>
        {buttons.map(button => (
          <Button
            key={button.id}
            id={button.id}
            value={button.value}
            type={button.type}
            handleSetExpression={handleExpression}
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
