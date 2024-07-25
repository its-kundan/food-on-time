import React from 'react'

function Login() {
  return (
    <>
        <div className='flex flex-col'>
        <h3> Login  Page</h3>
        <input className='border ' type="email" placeholder="Email" />
        {/* <br /> */}
        <input className='border-8' type="password" placeholder="password" />
        
        <button>Login</button>
        </div>
    </>
  )
}

export default Login
