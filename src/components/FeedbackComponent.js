import React from "react";
import "./FeedbackComponent.css"

function FeedbackComponent(props){
    return(
        <>
        <div id="feedBacksContainer">
            <h2>Name : {props.name} | Departement : {props.departement} | Rating : {props.rating}</h2>
        </div>
        </>
    )
}
export default FeedbackComponent;