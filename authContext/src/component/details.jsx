import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Detail = () => {
    const {token} = useContext(AuthContext)
    console.log("data from context",token)
   
  return (
    <div>
      <h1>Details</h1>
      <h2>Congo... You LogedIn</h2>
      <h2>Your Token is {token?.token}</h2>
    </div>
  )
}

export default Detail