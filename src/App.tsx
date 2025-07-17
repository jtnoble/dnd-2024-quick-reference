import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Combat from './pages/Combat';
import DiceRollerTool from './pages/DiceRollerTool';


function App() {

  return (
    <HashRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/combat" element={<Combat />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/dice-roller' element={<DiceRollerTool />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
