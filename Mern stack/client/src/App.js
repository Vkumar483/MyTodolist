import './App.css';
import React from 'react';
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes ,useNavigate } from 'react-router-dom'
import Home from './component/home'
import About from './component/about'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path='/about' element={< About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );

  }
}

export default App;
