import React, { useState } from 'react';

function Modal({display,children,change}) {
    return  display && (
        <div>
            {children}
            <button onClick={change}>close</button>
        </div>
    );
}

export default Modal