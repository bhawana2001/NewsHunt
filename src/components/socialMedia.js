import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin, faGithub
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
    return (
        <div className="social-container"  style={{marginLeft:"650px"}}>
            <a href="https://github.com/bhawanagaur143"
                className="github social" style={{
                    margin: "0 1rem", transition: "transform 250ms",
                    display: "inline-block", color: "black"
                }}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/bhawana-gaur-601322189/"
                className="linkedin social" style={{
                    margin: "0 1rem", transition: "transform 250ms",
                    display: "inline-block", color: "#4968ad"
                }}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>
    );
}

export default SocialMedia