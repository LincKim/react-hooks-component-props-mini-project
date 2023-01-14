import React from "react";
import blogData from "../data/blog";

function About(){

    return (
        <aside>
            <img src={blogData.image} alt="blog logo" placeholder="https://via.placeholder.com/215" />
            <p>{blogData.about}</p>
        </aside>
    )
}


export default About;