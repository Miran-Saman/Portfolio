import Storage from "../storage"

function Two() {
    const ProtfolioStorage = Storage.ProtfolioStorage;
    const lists = ProtfolioStorage[1].index.map((number)=>
    <div className="bord">
        <div className="border-of-picture">
            <img src={number} alt="" className="setting-picture"/>
        </div>
    </div>
    )
    return lists
}
export default Two