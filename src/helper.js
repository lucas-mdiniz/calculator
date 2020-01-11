export default expression => {
  const operators = /([-+/*])/;
  const isNumber = /\d/;
  const isSign = /[-+]/;

  const postFixExpression = [];
  const postFixstack = [];
  const evaluateStack = [];
  let result;

  let operatorsArray = expression.split(operators);

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

  let negativeNumber = false;

  operatorsArray.forEach((item, index) => {
    if (isNumber.test(item)) {
      postFixExpression.push(item);
    } else if (operators.test(item)) {
      while (postFixstack.length > 0) {
        const peekedItem = postFixstack[postFixstack.length - 1];

        if (operators.test(operatorsArray[index - 1]) && item === '-') {
          const beforeNegative = postFixstack.pop();
          negativeNumber = true;
          postFixstack.push(item);
          postFixstack.push(beforeNegative);
          break;
        } else if (
          operators.test(peekedItem) &&
          getPriority(peekedItem) >= getPriority(item)
        ) {
          postFixExpression.push(peekedItem);
          postFixstack.pop();
        } else break;
      }

      if (!negativeNumber) {
        postFixstack.push(item);
      } else negativeNumber = false;
    }
  });

  console.log(postFixstack);

  while (postFixstack.length > 0) {
    postFixExpression.push(postFixstack.pop());
  }

  console.log(postFixExpression);

  /* threat the signs */
  postFixExpression.forEach((item, i) => {
    const nextOperator = postFixExpression[i + 1];

    if (isSign.test(item) && isSign.test(nextOperator)) {
      if (item === nextOperator) {
        postFixExpression.splice(i, 2, '+');
      } else {
        postFixExpression.splice(i, 2, '-');
      }
    }
  });

  /* evaluate the expression */

  postFixExpression.forEach(item => {
    if (isNumber.test(item)) {
      evaluateStack.push(item);
    } else if (operators.test(item)) {
      if (evaluateStack.length === 1) {
        evaluateStack.unshift('0');
      }

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

  return evaluateStack[0].toString();
};
