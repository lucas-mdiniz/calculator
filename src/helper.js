export default expression => {
  const operators = /([-+/*])/;
  const isNumber = /\d/;

  const postFixExpression = [];
  const postFixstack = [];
  const evaluateStack = [];
  let result;

  let operatorsArray = expression.split(operators);
  let i;
  let calc;
  let operator;

  function getPriority(currentOperator) {
    if (currentOperator === '+' || currentOperator === '-') {
      return 1;
    } else if (currentOperator === '*' || currentOperator === '/') {
      return 2;
    }
    return 0;
  }

  /* remove spaces */

  operatorsArray = operatorsArray.filter(element => element !== '');

  /* remove if last element is operator */
  while (operators.test(operatorsArray[operatorsArray.length - 1])) {
    operatorsArray.pop();
  }

  /* convert expression to postFix */

  operatorsArray.forEach(item => {
    if (isNumber.test(item)) {
      postFixExpression.push(item);
    } else if (operators.test(item)) {
      while (postFixstack.length > 0) {
        const peekedItem = postFixstack[postFixstack.length - 1];

        if (
          operators.test(peekedItem) &&
          getPriority(peekedItem) >= getPriority(item)
        ) {
          postFixExpression.push(peekedItem);
          postFixstack.pop();
        } else break;
      }

      postFixstack.push(item);
    }
  });

  while (postFixstack.length > 0) {
    postFixExpression.push(postFixstack.pop());
  }

  postFixExpression.forEach(item => {
    if (isNumber.test(item)) {
      evaluateStack.push(item);
    } else if (operators.test(item)) {
      const number2 = parseFloat(evaluateStack.pop());
      const number1 = parseFloat(evaluateStack.pop());

      switch (item) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case '/':
          result = number1 / number2;
          break;
        case '*':
          result = number1 * number2;
          break;
        default:
          result = 0;
      }
      evaluateStack.push(result);
    }
  });

  console.log(postFixExpression);
  console.log(evaluateStack);
  /* calculate the priorities */

  while (operatorsArray.includes('*') || operatorsArray.includes('/')) {
    operator = operatorsArray.find(
      element => element === '/' || element === '*'
    );

    if (operator === '/') {
      i = operatorsArray.indexOf('/');

      if (operatorsArray[i + 1] === '-') {
        calc =
          parseFloat(operatorsArray[i - 1]) /
          -parseFloat(operatorsArray[i + 2]);
        operatorsArray.splice(i - 1, 4, calc);
      } else if (operatorsArray[i + 1] === '+') {
        calc =
          parseFloat(operatorsArray[i - 1]) / parseFloat(operatorsArray[i + 2]);
        operatorsArray.splice(i - 1, 4, calc);
      } else {
        calc =
          parseFloat(operatorsArray[i - 1]) / parseFloat(operatorsArray[i + 1]);
        operatorsArray.splice(i - 1, 3, calc);
      }
    } else if (operator === '*') {
      i = operatorsArray.indexOf('*');
      if (operatorsArray[i + 1] === '-') {
        calc =
          parseFloat(operatorsArray[i - 1]) *
          -parseFloat(operatorsArray[i + 2]);
        operatorsArray.splice(i - 1, 4, calc);
      } else if (operatorsArray[i + 1] === '+') {
        calc =
          parseFloat(operatorsArray[i - 1]) * parseFloat(operatorsArray[i + 2]);
        operatorsArray.splice(i - 1, 4, calc);
      } else {
        calc =
          parseFloat(operatorsArray[i - 1]) * parseFloat(operatorsArray[i + 1]);
        operatorsArray.splice(i - 1, 3, calc);
      }
    }
  }

  /* calculate the non priorities */

  while (operatorsArray.length > 1) {
    operator = operatorsArray.find(
      element => element === '+' || element === '-'
    );

    if (operator === '+') {
      i = operatorsArray.indexOf('+');
      calc =
        parseFloat(operatorsArray[i - 1]) + parseFloat(operatorsArray[i + 1]);
      operatorsArray.splice(i - 1, 3, calc);
    } else if (operator === '-') {
      i = operatorsArray.indexOf('-');
      calc =
        parseFloat(operatorsArray[i - 1]) - parseFloat(operatorsArray[i + 1]);
      operatorsArray.splice(i - 1, 3, calc);
    }
  }

  return operatorsArray[0].toString();
};
