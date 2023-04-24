import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const News = () => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setNews(data.posts))
    },[])
  return (
    <>
    <h1>News</h1>
    <div className='news-body'>
     {
        news.map(item => (
        <Link key={item.id} to={`/news/${item.id}`}>
            <li>{item.title}</li>
        </Link>))
     }
    </div></>)}
export default News;