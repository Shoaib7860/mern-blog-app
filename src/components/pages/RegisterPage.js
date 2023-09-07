import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        name,
        password
      })
      alert("User register")
      setName("");
      setPassword("");
      navigate("/login")
      
    } catch (error) {
      console.log(error)
      
    }
  

  }

  return (
    <>
      <form className='register' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type='text' placeholder='username' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Register</button>
      </form>
    </>
  )
}

export default RegisterPage