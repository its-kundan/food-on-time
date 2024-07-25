"use client"
import React from 'react'
import { useState } from 'react';

import Login from '@/app/_components/Login'
import Signup from '@/app/_components/Signup'

function page() {
    const [login,setLogin]= useState(true);
  return (
    <>
    <h1> Login/ Sign-Up page.</h1>
    {
        login? 
    }
    <Login/>
    <Signup/>
    <button> This is button</button>
    </>
  )
}

export default page
