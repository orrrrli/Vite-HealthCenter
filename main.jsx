import { createRoot } from 'react-dom/client'// Importamos del DOM el create root
import { App } from './src/App.jsx'
const root = createRoot(document.getElementById('app')) // Aqui traemos lo que queremos renderizar

// eslint-disable-next-line react/react-in-jsx-scope
root.render(<App/>)
