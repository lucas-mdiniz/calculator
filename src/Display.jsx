import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
  border: none;
  background: #444;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 15px;
  height: 60px;
`;

function Display() {
  return <StyledDisplay>0</StyledDisplay>;
}

export default Display;
