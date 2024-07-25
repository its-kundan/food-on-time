/* disable eslint */
"use client"
import React from 'react'
import { useState } from 'react';

import Login from '@/app/_components/Login'
import Signup from '@/app/_components/Signup'

function Restaurant() {
    const [login,setLogin] = useState(true);
  return (
    <>
    <h1> Login/ Sign-Up page.</h1>
    <h2> this is heading 2</h2>
    {
        login?<Login/>:<Signup/>
    }

   
    <div>

    <button classNameonClick={()=>{setLogin(!login)}}>
      {login?"Do not have account? Sign up":"Already have an account? Login"}
      
    </button>
    </div>
    </>
  )
}

export default Restaurant
