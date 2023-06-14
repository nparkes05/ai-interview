import React from "react";
import fetchRequest from "../script/script";

const Interview = () => {
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Interview</h1>
            <button type="button" onClick={clicked}>Try me!</button>
            <form>
                <label for="position">Enter a Position</label>
                <input type="text" id="position" name="position"></input>
            </form>
            <p id="repID">Response</p>
        </div>
    )
}

async function clicked() {
    try {
        const role = document.getElementById("position").value;
        console.log(role);
        const message = await fetchRequest(role, "Test");
        console.log(message);
        document.getElementById("repID").innerHTML = message;
    } catch (error) {
        console.log('Error:', error);
    }
}

export default Interview