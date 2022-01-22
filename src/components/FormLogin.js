import React, {useState} from 'react';
import {login, setToken} from '../services/auth';

const FormLogin = ({setUser}) => {
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
        const user = await login({
            username, password,
          })
          window.localStorage.setItem(
            'user', JSON.stringify(user)
          ); 
          setToken(user.token);
          setUser(user);
    } catch(e) {
        console.log("error loging...")
    }
  }


    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <div>
            username
                <input
                type="text"
                value={username}
                name="Username"
                onChange={({ target }) => setUsername(target.value)}
            />
            </div>
            <div>
            password
                <input
                type="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
            />
            </div>
        <button type="submit">login</button>
        </form>
    );
}

export default FormLogin;