import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/atmic-design/">Home</SLink>
      <SLink to="/atmic-design/users">Users</SLink>
    </SHeader>
  )
}

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
  color: #fff;
  text-decoration: none;
`;
