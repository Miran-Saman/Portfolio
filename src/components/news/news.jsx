import React, { useState, useEffect } from 'react';
import Strong from '../strong';
import Title from '../title';
import Modal from "react-modal"
import Storage from "../storage"
import "./news.css"
import Open from './open';

var moment = require("moment")

function News(props) {

    const [open , setOpen]= useState(false);
    const [animation , setAnimation ] = useState(true)
    const [item,setItem] = useState(null)

    const newsRender = Storage.NewsStorage.map((item) => 
        <div className="bord" onClick={()=> {setItem(item);setAnimation(true);setOpen(item.image)}}>
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
                <div>
                    {item.header}
                </div>
            </div>
        </div>
    )

    const styled ={
        overlay : {
            backgroundColor: "rgb(0 0 0 / 75%)",
            animationDuration : ".4s",
            animationName : animation ? "open" : "close"
        },
        content : {
            position: "absolute",
            inset: "50px 0px",
            border: "1px solid rgb(204, 204, 204)",
            background: "rgb(255, 255, 255)",
            overflow: "auto",
            borderRadius: "5px",
            outline: "none",
            padding: "50px",
            margin: "0% auto",
            width: "860px"
        }
    } 

    return (
        <div className="News">
            <Title value="News"/>
            <Strong value="Get in Touch" />
            <div className="flexer">
                {newsRender}
            </div>
            <Modal style={styled} isOpen={open} onRequestClose={()=> {setAnimation(false);setTimeout(()=>setOpen(false),390)}}>
                <Open image={open} item={item}/>
            </Modal>
        </div>
    )
}
export default News