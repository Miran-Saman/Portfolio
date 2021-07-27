import ReactDOM from "react-dom"
import React, { useState, useEffect } from 'react';

function Display(props) {
    const  [number ,setNumber] = useState(props.number)
    const [exit, setExit] = useState("")
    useEffect(()=>{
        console.log(number)
    })
    return (
    <div className={"display"} style={{ animationName: exit }}>
        <div className="exit" onClick={()=> {setExit("close"); setTimeout(()=> 
            ReactDOM.render(null,document.getElementById("rendering")),390)}}>
                III
            </div>
            <img src={number} alt="" className="image-display"/>
            <div>
                {props.ProtfolioStorage.map(item => 
                    <img src={item} alt="" className="images-display" onClick={() => setNumber(item)}/>
                )}
            </div>
    </div>
    )
}

export default Display