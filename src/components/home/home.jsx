import React, { useState, useEffect } from 'react';
import "./home.css"
import FaceBook from "./logo/facebook-img.svg"
import Twitter from "./logo/twitter-img.svg"
import Instagram from"./logo/instagram-img.svg"
import Dirbbble from "./logo/dribbble-img.svg"
import HomeStrage from "../storage"
import Available from "./available"


function Home() {
    const [isAvailable,setIsAvailable] = useState(false)

    setTimeout(()=> isAvailable && setIsAvailable(false), 3000);

    return (
        <div className="home">
            <img className="image" src="" alt="" /> 
            <div className="details">
                <p style={{fontSize : HomeStrage.name.length > 11 && 55}} className="name">
                    {HomeStrage.name}
                </p>
                <p className="job">
                    {HomeStrage.job}
                </p>
                <p className="social">
                    <a onClick={() => setIsAvailable("facebook")} href={!HomeStrage.FaceBookLink ? null : HomeStrage.FaceBookLink}>
                        <Available clicked={isAvailable === "facebook"} link={HomeStrage.FaceBookLink} logo={FaceBook}/>
                    </a>
                    <a onClick={() => setIsAvailable("twitter")} href={!HomeStrage.TwitterLink ? null :HomeStrage.TwitterLink }>
                        <Available clicked={isAvailable === "twitter"} link={HomeStrage.TwitterLink} logo={Twitter}/>
                    </a>
                    <a onClick={() => setIsAvailable("instagram")} href={!HomeStrage.InstagramLink ? null : HomeStrage.InstagramLink}>
                        <Available clicked={isAvailable === "instagram"} link={HomeStrage.InstagramLink} logo={Instagram}/>
                    </a>
                    <a onClick={() => setIsAvailable("dirbbble")} href={!HomeStrage.DirbbbleLink ? null : HomeStrage.DirbbbleLink}>
                        <Available clicked={isAvailable === "dirbbble"} link={HomeStrage.DirbbbleLink} logo={Dirbbble}/>
                    </a>
                </p>
            </div>
        </div>
    )
}
export default Home