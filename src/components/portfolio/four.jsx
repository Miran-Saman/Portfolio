import Storage from "../storage"

function Four() {
    const ProtfolioStorage = Storage.ProtfolioStorage;
    const lists = ProtfolioStorage[3].index.map((number)=>
    <div className="bord">
        <div className="border-of-picture">
            <img src={number} alt="" className="setting-picture"/>
        </div>
    </div>
    )
    return lists
}

export default Four