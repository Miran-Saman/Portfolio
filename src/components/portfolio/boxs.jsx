import ReactDOM from "react-dom"
import { useState } from "react";
import Storage from "../storage"
import Display from "./Display";
import Modal from "react-modal"

const styleModal = {
    overlay : {
        position: "fixed",
        inset: "0px",
        backgroundColor: "rgb(0 0 0 / 75%)",
    },
    content : {
        position: "unset",
        inset : "unset",
        border: "unset",
        background: "unset",
        overflow: "unset",
        borderRadius: "unset",
        outline: "unset",
        padding: "unset",
        display : "flex",
        justifyContent : "center"
    }
} 

function Boxs(props) {
    const [open , setOPen ] = useState(false)

    const ProtfolioStorage = Storage.ProtfolioStorage[props.number].index;
    const lists = ProtfolioStorage.map((image)=> 
    <div className="bord" onClick={() => setOPen([image,ProtfolioStorage])}>
        <div className="border-of-picture">
            <img src={image} alt="" className="setting-picture"/>
        </div>
    </div>
    )
    return (
        <>
        {lists}
        <Modal 
            style={styleModal}
            isOpen={open}
            onRequestClose={()=> setOPen(false)}
            >
            {open && <Display image={open[0]} ProtfolioStorage={open[1]}/>}
        </Modal>
        </>
    )
}
export default Boxs