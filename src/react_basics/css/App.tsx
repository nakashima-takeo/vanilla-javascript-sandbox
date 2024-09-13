import React from 'react'
import { InlineStyle } from "./InlineStyle"
import { CssModules } from './CssModules';
import { StyledJsx } from './StyledJsx';
import { StyledComponents } from './StyledComponents';
import { Emotion } from './Emotion';

export const App = () => {
  return (
    <>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  )
}

export default App;
