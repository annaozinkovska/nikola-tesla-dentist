import React from "react";

function Article() {
    return (
        <div>
            <div className="article__title">
                <h2>NVIDIA Accelerated AI on Azure</h2>
            </div> 
            <div className="article__title__prescr">
                <h3>Article description:</h3>
                <p>NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.</p>
            </div> 
            <div className="article__title__butt">
                <button>Read</button>
                <button>Mark as read</button>
                <button>Mark as unread</button>
            </div>
            <div className="article__title__author">
                <h4>Author: Mike</h4>
                <h4> Published: 06.12.2022</h4>
                <h4>Theme: Video cards</h4>
            </div> 
        </div>
  );
}

export default Article;
     