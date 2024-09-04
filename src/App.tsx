import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './pages/components/navbar/Navbar'
import Footer from './pages/components/footer/Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/categorias" element={<ListarCategoria />} /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
