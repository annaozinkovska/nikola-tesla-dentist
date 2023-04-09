import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article({children, show, lang}) {
  
    return (
    <>
    {children}
        <ArticleBody show={show} lang={lang} />
    <ArticleAuthor lang={lang}/> 
    </>
    );
  }
  export default Article;



