import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const SinglePost = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async (id) => {
            const response = await fetch(`https://dummyjson.com/posts/${id}`);
            const data = await response.json();
            if (!data.id) {
                navigate('/post');
                return
            }
            setPost(data);
        };
        getData(id);
    }, [id, navigate])

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    )

}

export default SinglePost;