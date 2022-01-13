import './App.css';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Notecontext from './context/Notecontext';


function App() {
  const todos = {
    "name": "Libron Lopes",
    "email": "libron@gmail.com",
    "gender": "Male",
    "qualification": "B Tech"
  }
  return (
    <>
       <Notecontext.Provider value={todos}>
        <Router>
          <Navbars />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/about" element={<About />}/>
          </Routes>
        </Router>
        </Notecontext.Provider>
    </>
  );
}

export default App;
