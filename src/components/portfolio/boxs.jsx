import ReactDOM from "react-dom"
import Storage from "../storage"
import Display from "./Display";


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