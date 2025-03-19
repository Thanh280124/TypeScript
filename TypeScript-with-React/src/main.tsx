
import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App'
import MycontextProvider from './context/Mycontext'
createRoot(document.getElementById('root')!).render(
    <MycontextProvider>
    <App />
    </MycontextProvider>
 ,
)
