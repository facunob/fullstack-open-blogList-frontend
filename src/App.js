import React, { useState, useEffect, useRef } from 'react';
import Blog from './components/Blog';
import {getAll} from './services/blogs';
import FormLogin from './components/FormLogin';
import BlogForm from './components/BlogForm';
import LogOutButton from './components/LogOutButton';
import Togglable from './components/Togglable';
import { setToken } from './services/auth';

const App = () => {
  const [user, setUser] = useState(undefined);
  const [blogs, setBlogs] = useState([]);

  const blogFormRef = useRef();

  useEffect(() => {
   getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('user')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setToken(user.token)
      setUser(user);
    }
  }, []);

  const close = () => {
    blogFormRef.current.toggleVisibility();
  }

  return (
    <>
      {!user ? <FormLogin setUser={setUser} /> : <LogOutButton /> }
      {user && <Togglable message="Create blog" ref={blogFormRef} ><BlogForm close={close} /> </Togglable> }
      <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </>
  )
}

export default App