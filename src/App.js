import './App.css';
import React, { useState } from 'react';
import Storage from "./components/storage"

function App() {

  const [room, setRoom] = useState(Storage.LeftBarStorage[0].component)
  const manuRender = Storage.LeftBarStorage.map((item)=> 
  <div className="manu-text" onClick={()=> setRoom(item.component)}>
    {item.name}
  </div>
  )
  
  return (
    <div className="App">
      <div id ="rendering"/>
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
