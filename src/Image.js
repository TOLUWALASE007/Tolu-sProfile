import React from "react";
import myPic from "./images/pic.jpeg";

export default function Image() {
    return (
        <div className="myPicdiv">
        <img 
            src={myPic}
            alt="my_pic"
            className="myPic"
        />
        </div>
    )
}


