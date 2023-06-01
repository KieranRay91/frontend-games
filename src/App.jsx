import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleReview from './components/SingleReview'
import Home from './components/Home'
import Reviews from './components/Reviews'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <>
      <Nav className="nav" />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
      </>
      </BrowserRouter>
    )
}

export default App
