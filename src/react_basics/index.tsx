import React from 'react'
import { StrictMode } from "react"
import { createRoot } from 'react-dom/client';

import Router from "./router/Router.tsx"
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('navigation')!;
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
