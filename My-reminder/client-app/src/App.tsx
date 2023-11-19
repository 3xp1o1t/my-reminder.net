import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Repo from './components/Repo';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/repo" element={<Repo />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
