import * as React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import FormUserRead from '../src/components/formuser-read'
const rootElement = document.getElementById('user read app')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/routes/user-read.html' element={<FormUserRead/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
