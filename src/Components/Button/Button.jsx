import React from 'react';

const Button = (props) => {
    return(
        <>
        <button type={props.type} onClick={props.onclick} className={props.className} style={props.style}>{props.buttonName}</button>
        </>
    )
}
export default Button;