import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './components/App'

const root = document.getElementById('root')

createRoot(root).render(<App />)
