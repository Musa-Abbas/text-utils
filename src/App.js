import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  useEffect(() => {
    let dark = localStorage.getItem("mode")
    if (dark === "dark"){
      setMode(dark)
      document.body.style.backgroundColor = '#042743'
    }
    return () => {

    }
  },[])

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      localStorage.setItem('mode', 'dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled.", "success")
    }else{
      setMode('light')
      localStorage.setItem('mode', 'light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled.", "success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title = "TextUtils" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container  my-3">
      <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter text to analyze." mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
