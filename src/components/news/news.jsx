import React, { useState, useEffect } from 'react';
import Strong from '../strong';
import Title from '../title';
import Modal from './modal';
import Storage from "../storage"
import "./news.css"
import reactDom from 'react-dom';

var moment = require("moment")

function Open(props) {
    return (
        <div className="display">
            <div className="display-border">
                <img src={props.index} alt="" />
            </div>
        </div>
    );
}

function News(props) {
    const newsRender = Storage.NewsStorage.map((item) => 
        <div className="bord" onClick={()=> 
            reactDom.render(<Open index={item.image}/>, document.getElementById("rendering"))
        }>
            <div className="set-image">
                <div className="fix-image">
                    <img src={item.image} alt="" className="setting-image" />
                </div>
            </div>
            <div className="set-description">
                <div className="creator">
                    {item.creator} / {moment(item.date).format('LTS')}
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
                {newsRender}
            </div>
        </div>
    )
}
export default News