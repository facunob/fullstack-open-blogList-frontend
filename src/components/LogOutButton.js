import React from 'react';


const LogOutButton = () => {

    const handleLogOut = () => {
        window.localStorage.clear();
    }

    return <button onClick={handleLogOut} >Log out</button>
}

export default LogOutButton;