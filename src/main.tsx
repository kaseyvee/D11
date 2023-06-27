// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// // if any errors try https://reactrouter.com/en/main/start/tutorial
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


import App from './App'
import "./styles/index.scss"
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);