import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Research from './pages/Research'
import Haven from './pages/Haven'
import Patents from './pages/Patents'
import Contact from './pages/Contact'

export default function App() {
  return <BrowserRouter><div className="flex min-h-screen flex-col bg-white"><Nav /><main className="flex-1"><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} /><Route path="/research" element={<Research />} />
    <Route path="/haven" element={<Haven />} /><Route path="/patents" element={<Patents />} />
    <Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} />
  </Routes></main><Footer /></div></BrowserRouter>
}
