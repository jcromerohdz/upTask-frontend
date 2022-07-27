import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <h1 className='text-sky-600 font-black text-6xl capitalize'>
        Recover your access for not losing your {' '} 
        <span className='text-slate-700'>
          projects
        </span>
      </h1>
      <form 
        className='my-10 bg-white showdow rounded-lg p-10'
        action=""
      >
        <div className='my-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor="email"
          >
            Email
          </label>
          <input 
            id='email'
            type="email" 
            placeholder="Your Email"
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
          />
        </div>
        <input 
          type="submit" 
          value="Send Instructions"
          className='bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm hover:text-slate-800'
          to='/'
        >
          Do you have an account? Login
        </Link>
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm hover:text-slate-800'
          to='/register'
        >
          Don't have an account? Register
        </Link>
      </nav>
    </>
  )
}

export default ForgotPassword