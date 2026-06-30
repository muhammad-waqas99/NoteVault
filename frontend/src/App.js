import { useContext } from 'react'; 
import NoteContext from './contexts/Note/NoteContext'; 
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import OverlaySpinner from './components/OverlaySpinner';

function App() {
  const { globalLoading } = useContext(NoteContext); 
  return (
    <>
      
      {globalLoading && <OverlaySpinner />}
      
      <Navbar />
      <Alert />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;