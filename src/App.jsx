import { useState } from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
           <Route path='/edit/:userId' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
