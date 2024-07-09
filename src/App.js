import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/skills';
import Project from './components/project';
import Contact from './components/contact';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Skills" element={<Skills/>}></Route>
        <Route path="/Project" element={<Project/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
