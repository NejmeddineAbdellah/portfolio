import logo from './logo.svg';
import './App.css';
import { Header,Footer } from './component/Layout';
import Accueil from './component/Accueil';
import Experience from './component/Experience';
import Formation from './component/Formation';
import Certification from './component/Certificats';
import Projet from './component/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
            <Route path="/" element={<Accueil/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/formation" element={<Formation/>} />
            <Route path="/certificat" element={<Certification/>} />
            <Route path="/project" element={<Projet/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
