import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/index';
import Display from '../Display/index';
import useExpression from '../../hooks/useExpression';
import { CalculatorWrapper, ButtonsBox } from './styles';

function Calculator(props) {
  const { buttons } = props;

  const [expression, setExpression] = useExpression('0');

  const handleExpression = (e, value) => {
    e.preventDefault();
    let newValue = value;

    if (e.type === 'keydown') {
      switch (e.key) {
        case 'Enter':
          newValue = '=';
          break;
        case 'Backspace':
          newValue = '⌫';
          break;
        case ',':
          newValue = '.';
          break;
        case 'Escape':
          newValue = 'AC';
          break;
        default:
          newValue = e.key;
      }
    }

    setExpression(newValue);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleExpression);

    return () => {
      document.removeEventListener('keydown', handleExpression);
    };
  });

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
