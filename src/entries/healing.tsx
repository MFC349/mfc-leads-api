import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { LandingPageView, PAGES } from '../mfc-funnel-landing-pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPageView page={PAGES['healing-the-warrior-spirit']} />
  </StrictMode>
);
