import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
// import Combat from './pages/Combat';
import DiceRollerTool from './pages/DiceRollerTool';
import Footer from './components/Footer';


function App() {

  return (
    <HashRouter>
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/combat" element={<Combat />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/dice-roller" element={<DiceRollerTool />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
