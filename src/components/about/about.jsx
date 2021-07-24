import React, { useState, useEffect } from 'react';
import "./about.css"
import Storage from "../storage"

function About(props) {
    const AboutStorage = Storage.AboutStorage
    const lists = AboutStorage.address.map((number)=> 
        <div>
            <span className={number.name}>
                {number.p1}
            </span>
            <a style={{textDecoration:"none"}} href={number.EmailLink }>
                <span className={number.name + "2"}>
                    {number.p2}
                </span>
            </a>
        </div>
    )
    return (
        <div className="about">
            <img src="" className="image-about"/>
            <h1 className="director">{AboutStorage.director}</h1>
            <div className="description">
                <div className="short-description">{AboutStorage.shortDescription}</div>
                <div>
                    {lists}
                </div>
            </div>
        </div>
    )
}
export default About