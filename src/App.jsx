import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Index from './components/Index/Index';
import Footer from './components/Footer/Footer';


function App() {



  return (
    <>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />

          </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
