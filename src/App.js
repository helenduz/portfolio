import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Iterative from './components/ProjectPages/Iterative';
import Redesign from './components/ProjectPages/Redesign';
import Development from './components/ProjectPages/Development';
import Personas from './components/ProjectPages/Personas';
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/iterative" element={<Iterative/>}/>
          <Route path="/redesign" element={<Redesign/>}/>
          <Route path="/development" element={<Development/>}/>
          <Route path="/personas" element={<Personas/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
