import React from "react";

const EncSection = (props) => {
    return (
        <div className="enc-section">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.topics.map(topic => {
                return (
                    <h4>{topic.name}</h4>
                )
            })}
        </div>
    )
}

export default EncSection;