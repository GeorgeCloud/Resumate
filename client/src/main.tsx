import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { FormProvider } from './contexts/FormContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <FormProvider>
        <App />
      </FormProvider>
    </Router>
  </React.StrictMode>,
)
