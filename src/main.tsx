import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MfcHomepage from './MfcHomepage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MfcHomepage />
  </StrictMode>
);
