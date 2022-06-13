import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import GlobalStyles from './styles/GlobalStyles'
import './styles/font.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <BrowserRouter>
        <GlobalStyles />
        <App />
    </BrowserRouter>
)
