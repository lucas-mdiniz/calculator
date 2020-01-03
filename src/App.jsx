import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';

const CalculatorContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #a9a9a9;
`;

function App() {
  const buttons = [
    { id: 'one', value: '1', type: 'number' },
    { id: 'two', value: '2', type: 'number' },
    { id: 'three', value: '3', type: 'number' },
    { id: 'four', value: '4', type: 'number' },
    { id: 'five', value: '5', type: 'number' },
    { id: 'six', value: '6', type: 'number' },
    { id: 'seven', value: '7', type: 'number' },
    { id: 'eight', value: '8', type: 'number' },
    { id: 'nine', value: '9', type: 'number' },
    { id: 'zero', value: '0', type: 'number' },
    { id: 'equals', value: '=', type: 'operator' },
    { id: 'multiply', value: '*', type: 'operator' },
    { id: 'divide', value: '/', type: 'operator' },
    { id: 'add', value: '+', type: 'operator' },
    { id: 'subtract', value: '-', type: 'operator' },
    { id: 'decimal', value: '.', type: 'operator' },
    { id: 'clear', value: 'AC', type: 'operator' }
  ];

  return (
    <CalculatorContainer>
      <Calculator buttons={buttons} />
    </CalculatorContainer>
  );
}

export default App;
