import Storage from "../storage"

function Boxs(props) {
    const ProtfolioStorage = Storage.ProtfolioStorage;
    const lists = ProtfolioStorage[props.number].index.map((number)=>
    <div className="bord">
        <div className="border-of-picture">
            <img src={number} alt="" className="setting-picture"/>
        </div>
    </div>
    )
    return lists
}
export default Boxs