import { createRoot } from 'react-dom/client' //Importamos del DOM el create root

const root = createRoot(document.getElementById('app')) //Aqui traemos lo que queremos renderizar

root.render(<h1>Hello, World</h1>)