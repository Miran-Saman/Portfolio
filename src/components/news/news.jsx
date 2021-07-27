import React, { useState, useEffect } from 'react';
import Strong from '../strong';
import Title from '../title';
import Modal from './modal';
import Storage from "../storage"
import "./news.css"

function News(props) {
    const newRender = Storage.NewsStorage.map((item , i) => 
        <div className="bord">
            <div className="set-image">
                <div className="fix-image">
                    <img src={item.image} alt="" className="setting-image" />
                </div>
            </div>
            <div className="set-description">
                <div className="creator">
                    {item.creator} / {item.date}
                </div>
                <div className="line"></div>
            </div>
        </div>
    )
    return (
        <div className="News">
            <Title value="News"/>
            <Strong value="Get in Touch" />
            <div className="flexer">
                {newRender}
            </div>
        </div>
    )
}
export default News