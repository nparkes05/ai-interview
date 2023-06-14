import React from "react";
import fetchRequest from "../script/script";

const Interview = () => {
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Interview</h1>
            <button type="button" onClick={clicked}>Try me!</button>
            <p id="repID">Response</p>
        </div>
    )
}

async function clicked() {
    try {
        const message = await fetchRequest("test", "Test");
        console.log(message);
        document.getElementById("repID").innerHTML = message;
    } catch (error) {
        console.log('Error:', error);
    }
}

export default Interview