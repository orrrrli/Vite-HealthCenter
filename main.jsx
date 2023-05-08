import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import SimpleCard from './src/login'
const rootElement = document.getElementById('app')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <SimpleCard />
    </ChakraProvider>
  </React.StrictMode>
)
