import React from "react";

const Fridge = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
            <h2>{props.contactPerson}</h2>
        </div>
    )
}

export default Fridge;