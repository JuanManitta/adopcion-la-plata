import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App';
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './theme/AppTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <AppTheme>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    </AppTheme>
  // </React.StrictMode>
)
