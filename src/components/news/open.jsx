var moment = require("moment")

function Open(props) {
    const item = props.item
    return (
        <div className="modal-flex">
            <img src={props.image} alt="" className="open-image"/>
            <div className="creator">
                {item.creator} / {moment(item.date).format('LTS')}
                <div className="line"></div>
            </div>
            <div>
               {item.header} 
            </div>
        </div>
    );
}

export default Open