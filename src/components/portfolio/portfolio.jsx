import React, { useState, useEffect } from 'react';
import "./portfolio.css"
import Title from "../title"
import Strong from "../strong"
import Storage from "../storage"
import Boxs from "./boxs"

function Portfolio(props) {

    const ProtfolioStorage = Storage.ProtfolioStorage;
    const [box, setBox] = useState(0)
    const BoxList = ProtfolioStorage.map((number)=>  {return})

    return (
        <div className="portfolio">
          <Title value={"portfolio"}/>
          <div className="title-flex">
              <Strong value={"Creative Portfolio"}/>
              <div className="Box-flex">
                <span onClick={()=> setBox(0)} className="Box">{ProtfolioStorage[0].manu}</span>
                <span onClick={()=> setBox(1)} className="Box">{ProtfolioStorage[1].manu}</span>
                <span onClick={()=> setBox(2)} className="Box">{ProtfolioStorage[2].manu}</span>
                <span onClick={()=> setBox(3)} className="Box">{ProtfolioStorage[3].manu}</span>
                <span onClick={()=> setBox(4)} className="Box">{ProtfolioStorage[4].manu}</span>
              </div>
          </div>
          <div className="portfolio-images">
              <Boxs number={box}/>
          </div>
        </div>
    )
}
export default Portfolio