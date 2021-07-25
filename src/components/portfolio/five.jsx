import Storage from "../storage"

function Five() {
    const ProtfolioStorage = Storage.ProtfolioStorage;
    const lists = ProtfolioStorage[4].index.map((number)=>
    <div className="bord">
        <div className="border-of-picture">
            <img src={number} alt="" className="setting-picture"/>
        </div>
    </div>
    )
    return lists
}

export default Five