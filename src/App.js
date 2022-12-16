import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Iterative from './components/ProjectPages/Iterative';
import Redesign from './components/ProjectPages/Redesign';
import Development from './components/ProjectPages/Development';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/iterative" element={<Iterative/>}/>
          <Route path="/redesign" element={<Redesign/>}/>
          <Route path="/development" element={<Development/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
