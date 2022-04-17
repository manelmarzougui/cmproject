import React, { useState } from 'react'
import './log.css'

import { useDispatch } from 'react-redux'
import { registerUser, loginUser } from '../../Js/actions/userAction'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
  const [name, setname] = useState('')
  const [lastName, setlastname] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [adresse, setadresse] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className='body-form body-f'>
      <div className='register-form logF'>
        <h1>Log In </h1>
        <form onSubmit={(e) => e.preventDefault()} className='signup'>
          <input
            type='email'
            required
            placeholder='example@gmail.com...'
            //   onChange={(e) => setlogin({ ...login, email: e.target.value })}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type='password'
            required
            placeholder='password...'
            //   onChange={(e) => setlogin({ ...login, password: e.target.value })}
            onChange={(e) => setpassword(e.target.value)}
          />
          <button
            type='submit'
            className='submit-btn'
            onClick={() => dispatch(loginUser({ email, password }, navigate))}
          >
             LogIn
          </button>

          <br />
          <h6>
            Don't Have an account <Link to='/register'>Register now</Link>
          </h6>
          <br />
        </form>
      </div>
    </div>
  )
}

export default Signup
