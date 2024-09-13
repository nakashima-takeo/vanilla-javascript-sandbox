import React from 'react';
import styled from 'styled-components';
import { BaseButton } from './BaseButtonStyle';

type Props = {
  children: React.ReactNode;
};

export const PrimaryButton = (props: Props) => {
  const { children } = props;
  return (
    <SButton>{children}</SButton>
  );
}

const SButton = styled(BaseButton)`
`;
