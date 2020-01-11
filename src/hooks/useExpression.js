import { useState } from 'react';
import calculate from '../helper';

export default initialValue => {
  const [state, setState] = useState(initialValue);

  const displayPattern = /([+-]?)(\d+)(\.?)(\d*)([*/]?)([+-]?)/g;
  const isOperator = /[*/+-]/;
  const isNumber = /\d/;
  const isSign = /^[-+]{1}$/;
  const lastChar = state.slice(-1);
  const beforeLastChar = state.slice(state.length - 2, state.length - 1);

  const setExpression = value => {
    if (value === 'AC') {
      setState('0');
    } else if (value === '⌫') {
      if (state.length <= '1') {
        setState('0');
      } else {
        setState(preState => preState.slice(0, -1));
      }
    } else if (isNumber.test(value)) {
      if (state === '0') {
        setState(value);
      } else {
        setState(preState => preState + value);
      }
    } else if (isOperator.test(value)) {
      if (isSign.test(value)) {
        if (isSign.test(lastChar)) {
          setState(preState => preState.slice(0, -1) + value);
        } else {
          setState(prevState =>
            (prevState + value).match(displayPattern).join('')
          );
        }
      } else if (isOperator.test(beforeLastChar) && !isNumber.test(lastChar)) {
        setState(preState => preState.slice(0, -2) + value);
      } else if (isOperator.test(lastChar)) {
        setState(preState => preState.slice(0, -1) + value);
      } else {
        setState(prevState =>
          (prevState + value).match(displayPattern).join('')
        );
      }
    } else if (value === '=') {
      setState(prevState => calculate(prevState));
    } else {
      setState(prevState => (prevState + value).match(displayPattern).join(''));
    }
  };
  return [state, setExpression];
};
