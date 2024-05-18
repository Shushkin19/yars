import React from "react";

const Note = function (props) {

    // parse props 
    let headerName;
    let image;
    let preDescription;

    console.log(props)
    return (
        <div className="Note">
            <h2>{props.dictProps.title}</h2>
            <a>{props.dictProps.description}</a>
            <p>{props.dictProps.id}</p>
        </div>
    )
}

export default Note