import React from 'react';
import buttons from './data/buttons';
import Calculator from './components/Calculator/index';
import CalculatorContainer from './styles/main-styles';

function App() {
  return (
    <CalculatorContainer>
      <Calculator buttons={buttons} />
    </CalculatorContainer>
  );
}

export default App;
