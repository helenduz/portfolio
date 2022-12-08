import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Iterative from './components/ProjectPages/Iterative';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/iterative" element={<Iterative/>}/>
          {/* <Route path="/proj-2" element={<ProjectPageComponent2/>}/>
          <Route path="/proj-3" element={<ProjectPageComponent3/>}/>
          <Route path="/proj-4" element={<ProjectPageComponent4/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
