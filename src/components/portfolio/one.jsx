import Storage from "../storage"

function One() {
    const ProtfolioStorage = Storage.ProtfolioStorage;
    const lists = ProtfolioStorage[0].index.map((number)=>
    <div className="bord">
        <div className="border-of-picture">
            <img src={number} alt="" className="setting-picture"/>
        </div>
    </div>
    )
    return lists
}
export default One