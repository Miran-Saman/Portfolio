import Storage from "../storage"

function Three() {
    const ProtfolioStorage = Storage.ProtfolioStorage;
    const lists = ProtfolioStorage[2].index.map((number)=>
    <div className="bord">
        <div className="border-of-picture">
            <img src={number} alt="" className="setting-picture"/>
        </div>
    </div>
    )
    return lists
}

export default Three