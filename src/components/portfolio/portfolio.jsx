import React, { useState, useEffect } from 'react';
import "./portfolio.css"
import Title from "../title"
import Strong from "../strong"
import Storage from "../storage"
import Boxs from "./boxs"

function Portfolio(props) {

    const ProtfolioStorage = Storage.ProtfolioStorage;
    const [box, setBox] = useState(0)
    const BoxLists = ProtfolioStorage.map((item,i) => 
    <span onClick={()=> setBox(i)} className="Box">{item.manu}</span>
    )

    return (
        <div className="portfolio">
          <Title value={"portfolio"}/>
          <div className="title-flex">
              <Strong value={"Creative Portfolio"}/>
              <div className="Box-flex">
                {BoxLists}
              </div>
          </div>
          <div className="portfolio-images">
              <Boxs number={box}/>
          </div>
        </div>
    )
}
export default Portfolio