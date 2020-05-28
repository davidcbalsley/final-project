import React from "react";

function StackedFormWrapper(props) {
    return (
        <form className="pure-form pure-form-stacked">{props.children}</form>
    );
}

export default StackedFormWrapper;