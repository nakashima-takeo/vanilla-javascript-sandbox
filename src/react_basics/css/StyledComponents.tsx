import styled from 'styled-components';
import React from 'react'

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components-</STitle>
      <SButton>Fight!!</SButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
  font-weight: bold;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #3d84a8;
    color: white;
    cursor: pointer;
  }
`;
