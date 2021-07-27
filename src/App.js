import './App.css';
import Home from "./components/home/home"
import React, { useState, useEffect } from 'react';
import Portfolio from './components/portfolio/portfolio';
import About from './components/about/about';
import News from './components/news/news';
import Contacts from './components/contact/contact';
import Storage from "./components/storage"

function App() {

  const [room, setRoom] = useState(<Home/>)
  const manuRender = Storage.LeftBarStorage.map((item)=> 
  <div className="manu-text" onClick={()=> setRoom(item.component)}>
    {item.name}
  </div>
  )
  
  return (
    <div className="App">
      <div className="LeftBar">
        <div className="manu-bar">
          <h2>
            Kurdistan
            </h2>
          <div className="manu">
            {
              manuRender
            }
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
