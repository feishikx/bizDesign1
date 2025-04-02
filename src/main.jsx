import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.less'; 
import './styles/App.less'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
