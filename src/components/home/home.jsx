import React, { useState, useEffect } from 'react';
import "./home.css"
import FaceBook from "./logo/facebook-img.svg"
import Twitter from "./logo/twitter-img.svg"
import Instagram from"./logo/instagram-img.svg"
import Dirbbble from "./logo/dribbble-img.svg"
import Storage from "../storage"
import Available from "./available"


function Home() {
    const logo = [FaceBook,Twitter,Instagram,Dirbbble]
    const HomeStorage = Storage.HomeStorage
    const [isAvailable,setIsAvailable] = useState(false)
    var size = 75 - HomeStorage.name.length;
    
    const socialRender = HomeStorage.social.map((item , i)=> 
        <a onClick={() => setIsAvailable(item.name)} href={!item.link ? null : item.link}>
            <Available clicked={isAvailable === item.name} link={item.link} logo={logo[i]}/>
        </a>
    )

    useEffect (()=> {
        setTimeout(()=> isAvailable && setIsAvailable(false), 3000);
    })

    return (
        <div className="home">
            <img className="image" src={HomeStorage.image} alt="" /> 
            <div className="details">
                <p style={{fontSize : size}} className="name">
                    {HomeStorage.name}
                </p>
                <p className="job">
                    {HomeStorage.job}
                </p>
                <p className="social">
                    {
                        socialRender
                    }
                </p>
            </div>
        </div>
    )
}
export default Home