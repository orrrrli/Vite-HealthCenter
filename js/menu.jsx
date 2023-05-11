import * as React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import Example from '../src/components/navbar'
import ProductSimple from '../src/components/card'
const rootElement = document.getElementById('menu app')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/routes/menu.html' element={<Example/>} />
        </Routes>
        <Routes>
          <Route exact path='/routes/menu.html' element={<ProductSimple/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
