import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { Board } from './src/App'
const rootElement = document.getElementById('app')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Board />
    </ChakraProvider>
  </React.StrictMode>
)
