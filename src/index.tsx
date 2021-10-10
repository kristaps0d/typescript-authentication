// General imports
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './core/App';

// Style imports
import './index.scss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);