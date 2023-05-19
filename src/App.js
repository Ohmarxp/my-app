
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Resume" element={<Resume />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
