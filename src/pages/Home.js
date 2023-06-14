import React from "react";
import '../App.css';
import openAIpic from "../logo.svg"

const linkStyle = {
    width: 500,
    height: 500,
    margin: 0,
};

const Home = () => {
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Homepage</h1>
            <p>
                This is a test for what I am going to write later. THis will be filled with 
                the purpose of the application
            </p>
            <div style={linkStyle} id="container">
                <img src={openAIpic} alt="This is a picture of OpenAI" />
            </div>
        </div>
    )
}

export default Home