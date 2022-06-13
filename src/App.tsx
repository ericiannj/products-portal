import Routes from './routes'
import { ProductProvider } from '@/contexts/product'

function App() {
    return (
        <ProductProvider>
            <Routes />
        </ProductProvider>
    )
}

export default App
