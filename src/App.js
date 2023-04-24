// import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Login from './components/Login';
import Post from './components/Post';
import SinglePost from './components/SinglePost';


import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/">Main</NavLink>
          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/post">Post</NavLink>

          <NavLink className={({isActive}) => isActive ? "menuLinkActive" : ""} to="/login">Login</NavLink>

        </nav>
        <Routes>
        <Route path='/' element={<Main />} />
          <Route path='/post' element={<Post/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/post/:id' element={<SinglePost />}/>
          <Route path='*' element={<h1>Not Found</h1>} />
        
        </Routes>
      </div>
    </BrowserRouter>)}  
export default App;
