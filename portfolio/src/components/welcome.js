import React from "react";
import TextWriter from "../utils/textwriter";

import table from "../assets/table.png"
import resume from "../assets/resume.png"
import cup from "../assets/cup.png"

const Welcome = () => {
    
    // array with texts to type in typewriter
    var startingText = ["Welcome to my portfolio site...", 
    "My resume is on the table, take a look", 
    "It's right next to the water", 
    "Have a drink if you like", 
    "Don't spill it on my resume... it's my only copy..."];

    var postSpill = ["MY RESUME", "That was my only copy..."];

    window.onload = TextWriter(startingText)


    return (
        <div className="welcome"> 
            <div className="textanim">
                {/* the text */}
                <span id="animtext">not working</span>
            </div>
            <div className="lamp">
                {/* the light */}
                <div id="oval"><div id="circle"></div></div>
                <div id="trapezoid"></div>
            </div>
            <div onClick={() => TextWriter(postSpill)}>
                <div className="tableset" style={{position: "absolute", top: "50%", left: "50%"}}>
                {/* the table set */}
                    {/* the table */}
                    <img src={table} style={{position: "absolute", top: "-250px", left: "-250px", height:"500px", width: "500px"}}/>
                    {/* the water */}
                    <img src={cup} style={{position: "absolute", top: "-250px", left: "-250px", height:"500px", width: "500px"}}/>
                    {/* the resume */}
                    <img src={resume} style={{position: "absolute", top: "-250px", left: "-250px", height:"500px", width: "500px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Welcome;