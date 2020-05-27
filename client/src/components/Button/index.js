import React from "react";

function Button(props) {
    console.log("Button props = " + props.onClick); // debug

    return (
        <button className="pure-button pure-button-primary" {...props}>{props.children}</button>
    );
}

export default Button;