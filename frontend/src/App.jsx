import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pagecompo/Home';
import About from './pagecompo/About';
import Skills from './pagecompo/Skills';
import {Experience} from './pagecompo/Experience'
import {Projects} from './pagecompo/Projects';
import {Contact} from './pagecompo/Contact';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
