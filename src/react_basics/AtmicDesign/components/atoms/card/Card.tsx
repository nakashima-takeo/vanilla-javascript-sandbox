import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
}

export const Card = (props: Props) => {
  const { children } = props;
  return (
    <SContainer>
      {children}
    </SContainer>
  );
}

const SContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: #ddd 0px 0px 4px 2px;
`;
