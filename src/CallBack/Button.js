import React from 'react';

function Button({value, handleClick, children}) {
    console.log('Button',children)
    return (
        <div>
            <button onClick={()=>handleClick(value)}>{children}</button>
        </div>
    )
}

export default React.memo(Button);
