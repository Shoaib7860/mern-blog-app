import React, { useContext, useState } from 'react'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../userContext';

function LoginPage() {
  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  const {setUserInfo,userInfo} = useContext(UserContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        name,
        password
      })
      if (response.error) {
        console.log(response.error)
      }
      else {
        alert("successfully login")
        setName("");
        setPassword("");
        setUserInfo(response)
        navigate("/")
       
      }

    } catch (error) {
      console.log(error)

    }

  }
  
  return (
    <>
    
      <form className='login' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type='text' placeholder='username' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </>
  )
}

export default LoginPage