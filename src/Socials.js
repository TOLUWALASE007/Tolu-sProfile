import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr"



export default function Socials() {
    return(
        <div className="Socials">
            <div className="SocialsEmail">
                <ul>
                    <li><GrMail className="emailIcon" /></li>
                    <li><a href="#" className="emailLink">Email</a></li>
                </ul>
            </div>

            <div className="SocialsLinkedin">
                <ul>
                    <li><FaLinkedin className="linkedinIcon" /></li>
                    <li><a href="#" className="linkedinLink">LinkedIn</a></li>
                </ul>
            </div>

        </div>
    )
}  