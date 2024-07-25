import React from 'react'

function Login() {
  return (
    <>
        <div className='flex '>
        <h3> Login  Page</h3>
        <input className='border ' type="email" placeholder="Email" />
        <br />
        <input className='border-8' type="password" placeholder="password" />
        <br />
        <button>Login</button>
        </div>
    </>
  )
}

export default Login
