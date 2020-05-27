import React from 'react';

function Tag(props) {
    const tagStyles = {
        marginBottom: "-1rem",
        marginTop: "2rem",
        fontSize: "0.8rem",
        color: "white",
        backgroundColor: props.bgColor,
        padding: "0.2rem",
        borderRadius: "0.6rem",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        marginLeft: "0.5rem"
    }

    return (
        <p style={tagStyles}>
            {props.tagContent}
        </p>
    )
}


export default Tag;