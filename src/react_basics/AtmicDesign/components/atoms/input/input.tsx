import React from "react";
import styled from "styled-components";

type Props = {
  placeholder?: string;
};

export const Input = (props: Props) => {
  return (
    <SInput type="text" placeholder={props.placeholder ?? ""} />
  );
}

const SInput = styled.input`
  padding: 8px 16px;
  border: solid 1px #ddd;
  border-radius: 9999px;
  outline: none;
  box-shadow: none;
  &:focus {
    box-shadow: 0 0 4px 1px #add8e6;
  }
`;
