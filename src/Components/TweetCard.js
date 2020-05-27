import React from 'react';
import ReactDOM from 'react-dom';
import Tag from "./Tag.js"

function TweetCard(props) {
    const cardStyles = {
        display: "inline-block",
        flexDirection: "column",
        width: "30rem",
        padding: "2rem",
        borderRadius: "1rem",
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: "0.05rem",
        borderColor: "black",
        boxShadow: "0.5rem 0.5rem black",
        textAlign: "left",
        marginBottom: "2rem"
    }
    
    const handleStyles = {
        fontSize: "1.2rem",
        marginBottom: "0.5rem",
        marginTop: "-0.8rem"
    }

    return (
        <div class="tweet" style={cardStyles}>
            <p id="handle" style={handleStyles}><b>@{props.handle}</b><br /></p>
            <i style={{marginTop: "10rem"}}>{props.tweet}</i>
            <br />
            <div class = "tags" style={{float: "right", display: "flex", flexDirection: "row", marginTop: "-1rem"}}>
                <Tag tagContent="Thursday, May 27" bgColor="black" />
                <Tag tagContent="Technical Error" bgColor="red"/>
                <Tag tagContent="Awaiting Response" bgColor="#ebc700" />
            </div>
        </div>

    )
}



export default TweetCard;
