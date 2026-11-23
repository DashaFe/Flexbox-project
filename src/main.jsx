import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/open-sans/latin-300.css';
import '@fontsource/open-sans/latin-400.css';
import '@fontsource/open-sans/latin-600.css';
import '@fontsource/open-sans/latin-700.css';
import './index.css';
import App from './App.jsx';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
