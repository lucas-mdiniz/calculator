import { useState } from 'react';

export default initialValue => {
  const [state, setState] = useState(initialValue);

  const displayPattern = /([+-]?)(\d+)(\.?)(\d*)([*/+]?)([-]?)/g; /* check if this is a better regex [+-]?\d*\.*\d+(?:[+*\/-][+-]?\d*\.*\d+)* */
  const isOperator = /[*/+-]/;
  const isNumber = /\d/;
  const isSign = /[-+]/;
  const lastChar = state.slice(-1);
  const beforeLastChar = state.slice(state.length - 2, state.length - 1);

  const setExpression = value => {
    if (value.includes('AC')) {
      setState('0');
    } else if (state.length === 1) {
      if (isNumber.test(value)) {
        if (state === '0') {
          setState(value);
        } else {
          setState(preVal => preVal + value);
        }
      } else if (value === '.') {
        setState(preVal => preVal + value);
      } else {
        setState(preVal => preVal + value);
      }
    } else if (isOperator.test(lastChar) && isOperator.test(value)) {
      if (isOperator.test(beforeLastChar)) {
        setState(prevVal => prevVal.slice(0, -2) + value);
      } else if (isSign.test(lastChar)) {
        setState(prevVal => prevVal.slice(0, -1) + value);
      } else if (!isSign.test(value)) {
        setState(prevVal => prevVal.slice(0, -1) + value);
      } else {
        setState(
          preVal =>
            (preVal + value).match(displayPattern) &&
            (preVal + value).match(displayPattern).join('')
        );
      }
    } else {
      setState(
        preVal =>
          (preVal + value).match(displayPattern) &&
          (preVal + value).match(displayPattern).join('')
      );
    }
  };
  return [state, setExpression];
};
