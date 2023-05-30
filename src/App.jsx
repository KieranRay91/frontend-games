import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <>
      <Nav className="Nav" />
      <Routes>
        <Route path="/" element={<Home/>}/>
  
      </Routes>
      </>
      </BrowserRouter>
    )
}

export default App
