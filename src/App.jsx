
import './App.css'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleReview from './components/SingleReview'
import Home from './components/Home'
import Reviews from './components/Reviews'
import Categories from './components/CategorySelecton'
import CategoryPage from './components/CategoryPage'

function App() {

  return (
      <BrowserRouter>
      <>
      <Nav className="nav" />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
      </>
      </BrowserRouter>
    )
}

export default App
