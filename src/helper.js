export default expression => {
  const operators = /([-+/*])/g;

  let operatorsArray = expression.split(operators);
  let i;
  let calc;
  let operator;

  /* fazer um while com index of  enquanto existir operador calcula reduzindo a array */

  /* remove spaces */

  operatorsArray = operatorsArray.filter(element => element !== '');

  /* remove if last element is operator */
  while (operators.test(operatorsArray[operatorsArray.length - 1])) {
    operatorsArray.pop();
  }

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

  return operatorsArray[0];
};
