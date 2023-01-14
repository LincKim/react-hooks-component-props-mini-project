import React from "react";
import blogData from "../data/blog";


 

function Article(){

    return (
        <article>
            <h3>{blogData.posts[0].title}</h3>
            <small value="Janurary 1, 1970">{blogData.posts[0].date}</small>
            <p>{blogData.posts[0].preview}</p>
        </article>
    )
}

export default Article;