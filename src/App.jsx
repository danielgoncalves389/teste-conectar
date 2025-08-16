import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sobre from './pages/sobre/page'
import Home from './pages/Home/page';
import Header from './components/Header/Header';

export default function App() {

  return (
    <>

    <h1>A</h1>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </>
  )
}


