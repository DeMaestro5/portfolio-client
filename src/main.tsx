import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { GithubProvider } from './context/github/GithubContext.tsx';
import { MetricsProvider } from './context/metrics/MetricsContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GithubProvider>
        <MetricsProvider>
          <App />
        </MetricsProvider>
      </GithubProvider>
    </BrowserRouter>
  </StrictMode>
);
