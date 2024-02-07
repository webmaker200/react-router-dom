import React from 'react'
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
  return (
    <>
      <h2 className='bg-orange-700 font-bold text-lg text-center text-white py-4'> User ID: {userid} </h2>
    </>
  )
}

export default User
