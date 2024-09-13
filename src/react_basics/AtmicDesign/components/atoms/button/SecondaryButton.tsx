import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButtonStyle';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const SecondaryButton = (props: Props) => {
  const { children, onClick } = props;
  return (
    <SButton onClick={onClick}>{children}</SButton>
  );
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
