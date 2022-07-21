import React from 'react'
import {Button, TextField} from '@material-ui/core'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'



const Login = () => {
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const { token , setToken} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        handleLogin(email,pass)
    } ,[])

    const handleLogin = (email,password) => {
        const data = {
            email,
            password
        }
        fetch(`https://reqres.in/api/login` ,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-Type" : "application/json"
            }
        }).then((res) => res.json())
        .then((res) => { setToken(res)
        })
    }

    // function navi(){
    //   console.log("token in navi" , token);
    //   navigate("/detail")

    // }
   if(token.token){
    console.log("token in if state" , token)
    navigate("/detail")
   }
    
  return (
    <div>
      <h1>Login</h1>
      <br />
      <div style={{display:"flex" , flexDirection:"column",width:"40%" , margin:"auto" , gap:"10px"}} >
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Email"  type="text"/>
      <TextField value={pass} onChange={(e) => setPass(e.target.value)} variant="outlined" label="Password" type="password" />
      <Button onClick={() => handleLogin(email,pass)} variant="contained">Login</Button>
      </div>
    </div>
  )
}

export default Login