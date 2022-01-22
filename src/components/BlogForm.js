import React, {useState} from 'react';
import { create } from '../services/auth';

const BlogForm = ({ close }) => {
  const [title, setTitle] = useState('') 
  const [author, setAuthor] = useState('') 
  const [url, setUrl] = useState('') 


const handleCreate = () => {
    create({
        title, author, url
    })
}

const handleCancel = e => {
    e.preventDefault();
    close();
}


return (
        <form onSubmit={handleCreate}>
            <h2>Login</h2>
            <div>
            title
                <input
                    type="text"
                    value={title}
                    name="title"
                    onChange={({ target }) => setTitle(target.value)}
                    id="title"
                />
            </div>
            <div>
            author
                <input
                type="text"
                value={author}
                name="author"
                onChange={({ target }) => setAuthor(target.value)}
                id="author"
            />
            </div>
            <div>
            url
                <input
                type="text"
                value={url}
                name="url"
                onChange={({ target }) => setUrl(target.value)}
                id="url"
            />
            </div>
        <button type="submit">login</button>
        <button onClick={e => handleCancel(e)} >cancel</button>
        </form>
    );
}

export default BlogForm;