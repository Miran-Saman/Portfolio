import React, { useState, useEffect } from 'react';
import "./portfolio.css"
import Title from "../title"
import Strong from "../strong"
import Storage from "../storage"
import One from "./one"
import Two from "./two"
import Three from "./three"
import Four from "./four"
import Five from "./five"

function Portfolio(props) {

    const ProtfolioStorage = Storage.ProtfolioStorage;
    const [box, setBox] = useState(<One/>)

    return (
        <div className="portfolio">
          <Title value={"portfolio"}/>
          <div className="title-flex">
              <Strong value={"Creative Portfolio"}/>
              <div className="Box-flex">
                <span onClick={()=> setBox(<One/>)} className="Box">{ProtfolioStorage[0].manu}</span>
                <span onClick={()=> setBox(<Two/>)} className="Box">{ProtfolioStorage[1].manu}</span>
                <span onClick={()=> setBox(<Three/>)} className="Box">{ProtfolioStorage[2].manu}</span>
                <span onClick={()=> setBox(<Four/>)} className="Box">{ProtfolioStorage[3].manu}</span>
                <span onClick={()=> setBox(<Five/>)} className="Box">{ProtfolioStorage[4].manu}</span>
              </div>
          </div>
          <div className="portfolio-images">
              {box}
          </div>
        </div>
    )
}
export default Portfolio