import ReactDOM from "react-dom"
import React, { useState, useEffect } from 'react';

function Display (props) {
    const [image, setImage] = useState(props.image)
   const ProtfolioStorage = props.ProtfolioStorage
   
   const ProtfolioStorageRender = ProtfolioStorage.map((item) => 
        <img 
        key ={item}
        src={item} alt="" 
        className="display-images" 
        onClick={() => setImage(item)}
        />
   )
    return (
        <>
          <img src={image} alt="" className="display-image"/>
            <div className="flexer-display-images">
              {ProtfolioStorageRender}
            </div>  
        </>
    )
}

export default Display

