import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/all.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import '../src/style/font/fontLink'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <App />
  </Router>,
)

reportWebVitals()
