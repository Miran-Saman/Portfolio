import React, { useState, useEffect } from 'react';
import "./home.css"
import FaceBook from "./logo/facebook-img.svg"
import Twitter from "./logo/twitter-img.svg"
import Instagram from"./logo/instagram-img.svg"
import Dirbbble from "./logo/dribbble-img.svg"
import Storage from "../storage"
import Available from "./available"


function Home() {
    const HomeStorage = Storage.HomeStorage
    const [isAvailable,setIsAvailable] = useState(false)
    var size = 75 - HomeStorage.name.length
    setTimeout(()=> isAvailable && setIsAvailable(false), 3000);

    return (
        <div className="home">
            <img className="image" src="" alt="" /> 
            <div className="details">
                <p style={{fontSize : size}} className="name">
                    {HomeStorage.name}
                </p>
                <p className="job">
                    {HomeStorage.job}
                </p>
                <p className="social">
                    <a onClick={() => setIsAvailable("facebook")} href={!HomeStorage.FaceBookLink ? null : HomeStorage.FaceBookLink}>
                        <Available clicked={isAvailable === "facebook"} link={HomeStorage.FaceBookLink} logo={FaceBook}/>
                    </a>
                    <a onClick={() => setIsAvailable("twitter")} href={!HomeStorage.TwitterLink ? null :HomeStorage.TwitterLink }>
                        <Available clicked={isAvailable === "twitter"} link={HomeStorage.TwitterLink} logo={Twitter}/>
                    </a>
                    <a onClick={() => setIsAvailable("instagram")} href={!HomeStorage.InstagramLink ? null : HomeStorage.InstagramLink}>
                        <Available clicked={isAvailable === "instagram"} link={HomeStorage.InstagramLink} logo={Instagram}/>
                    </a>
                    <a onClick={() => setIsAvailable("dirbbble")} href={!HomeStorage.DirbbbleLink ? null : HomeStorage.DirbbbleLink}>
                        <Available clicked={isAvailable === "dirbbble"} link={HomeStorage.DirbbbleLink} logo={Dirbbble}/>
                    </a>
                </p>
            </div>
        </div>
    )
}
export default Home