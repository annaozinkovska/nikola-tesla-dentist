import React from "react";

function ArticleBody({show, lang}) {
return (
        <div className="article__body ready">
          <h3 className="article__description">
            {!show && lang.description }
          </h3>
          <p className="article__text">
            {show ? lang.content : lang.preview }
          </p>
    </div>)
}
export default ArticleBody;
