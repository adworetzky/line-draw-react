import * as ReactDOMClient from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
const engine = new Styletron();

root.render(
  <StrictMode>
    <StyletronProvider value={engine}>
      <App />
    </StyletronProvider>
  </StrictMode>
);
