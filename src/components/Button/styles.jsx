import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props =>
    props.type === 'number' || props.id === 'decimal' ? '#2d2d2d' : '#dc8f00'};
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: ${props => props.id};

  &:hover {
    opacity: 0.7;
  }
`;

export default StyledButton;
