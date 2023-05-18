import * as React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import FormSheet from '../src/components/form'
const rootElement = document.getElementById('sheet app')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/routes/sheet.html' element={<FormSheet/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
