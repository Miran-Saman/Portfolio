
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Storage from "../storage"

function Display(props) {
    const  [number ,setNumber] = useState(props.number)
    const [exit, setExit] = useState("")
    useEffect(()=>{
        console.log(number)
    })
    return (
    <div className={"display"} style={{ animationName: exit }}>
        <div className="exit" onClick={()=> {setExit("close"); setTimeout(()=> 
            ReactDOM.render(null,document.getElementById("rendering")),390)}}>
                III
            </div>
            <img src={number} alt="" className="image-display"/>
            <div>
                {props.ProtfolioStorage.map(item => <img src={item} alt="" className="images-display" onClick={() => setNumber(item)}/>)}
            </div>
    </div>
    )
}

function Boxs(props) {
    const ProtfolioStorage = Storage.ProtfolioStorage[props.number].index;
    const lists = ProtfolioStorage.map((number)=> 
    <div className="bord" onClick={() => 
        ReactDOM.render(
            <Display number={number} ProtfolioStorage={ProtfolioStorage}/>
            ,document.getElementById("rendering"))
    }>
        <div className="border-of-picture">
            <img src={number} alt="" className="setting-picture"/>
        </div>
    </div>
    )
    return lists
}
export default Boxs