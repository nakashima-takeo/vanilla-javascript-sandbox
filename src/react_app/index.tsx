import React from 'react'
import { StrictMode } from "react"
import { createRoot } from 'react-dom/client';

import Router from "./router/Router.tsx"
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme.ts';
import { LoginUserProvider } from './providers/LoginUserProvider.tsx';

const domNode = document.getElementById('navigation')!;
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <LoginUserProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </LoginUserProvider>
    </ChakraProvider>
  </StrictMode>
);
