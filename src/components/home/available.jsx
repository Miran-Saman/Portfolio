import React from 'react';

function Available(props){

    if (props.link === "" && props.clicked ){
        return (
            <div className="isAvailable">
                <p className="string">
                    It's unavailable now
                </p>
            </div>
        );
    } else {
        return (
            <img src={props.logo} alt="" className="svg"/>
        );
    }
}

export default Available