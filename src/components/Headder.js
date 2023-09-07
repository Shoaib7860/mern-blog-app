import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from './userContext';

function Headder() {
  const navigate = useNavigate();
  const{setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    axios.get("http://localhost:5000/profile")
      .then((res) => setUserInfo(res)).catch((err) => console.log(err))

  }, [])

  function logout() {
    axios.post("http://localhost:5000/logout")
    setUserInfo(null)
    navigate("/login")

  }

 

  

  return (
    <>
      <header>
        <Link to="/" href="" className="logo">MyBlog</Link>
        <nav>
          {userInfo && (
            <>
              <Link to="/create">Create new post</Link>
              <a onClick={logout}>Logout</a>
              
             

            </>
          )}
          {!userInfo && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>

            </>
          )}

        </nav>
      </header>
    </>
  )
}

export default Headder