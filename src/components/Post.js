import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const Post = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setNews(data.posts))
    },[])
  return (
    <>
    <h1>Post</h1>
    <div className='post-body'>
     {
        news.map(item => (
        <Link key={item.id} to={`/post/${item.id}`}>
            <li>{item.title}</li>
        </Link>))
     }
    </div></>)}
export default Post;