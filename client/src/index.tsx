import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

// New way of ReactDOM.render() using react 18
const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

// root.unmount();
