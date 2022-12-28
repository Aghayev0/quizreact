import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componetns/Footer';
import Navbar from './componetns/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SignupForm from './pages/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<SignupForm />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
