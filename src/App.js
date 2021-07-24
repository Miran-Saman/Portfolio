import './App.css';
import Home from "./components/home/home"
import React, { useState, useEffect } from 'react';
import Portfolio from './components/portfolio';
import About from './components/about/about';
import News from './components/news';
import Contacts from './components/contacts';

function App() {

  const [room, setRoom] = useState(<Home/>)
  
  return (
    <div className="App">
      <div className="LeftBar">
        <div className="manu-bar">
          <h2>Kurdistan</h2>
          <div className="manu">
            <div className="manu-text" onClick={()=> setRoom(<Home/>)}>Home</div>
            <div className="manu-text" onClick={()=> setRoom(<About/>)}>About</div>
            <div className="manu-text" onClick={()=> setRoom(<Portfolio/>)}>Portfolio</div>
            <div className="manu-text" onClick={()=> setRoom(<News/>)}>News</div>
            <div className="manu-text" onClick={()=> setRoom(<Contacts/>)}>Contacts</div>
          </div>
        </div>
      </div>
      <div className="push"></div>
      <div className="rooms">
        {room}
      </div>
    </div>
  );
}

export default App;
