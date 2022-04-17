import React, { useState } from 'react'
import './log.css'

import { useDispatch } from 'react-redux'
import { registerUser, loginUser } from '../../Js/actions/userAction'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
  const [name, setname] = useState('')
  const [lastName, setlastname] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [adresse, setadresse] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className='body-form'>
      <div className='register-form log'>
        <h1>Register </h1>
        <form onSubmit={(e) => e.preventDefault()} className='signup'>
          <input
            type='name'
            placeholder='name'
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type='lastname'
            placeholder='lastname'
            onChange={(e) => setlastname(e.target.value)}
          />
          <input
            type='email'
            required
            placeholder='example@gmail.com...'
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type='password'
            required
            placeholder='password...'
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            type='adresse'
            required
            placeholder='adresse'
            onChange={(e) => setadresse(e.target.value)}
          />
          <input
            type='phone number'
            required
            placeholder='phone number'
            onChange={(e) => setadresse(e.target.value)}
          />
          <button
            className='btn btn-lg '
            onClick={() =>
              dispatch(
                registerUser(
                  { name, lastName, email, password, adresse },
                  navigate('/')
                )
              )
            }
          >
            SingUn
          </button>

          <p>
            By signing up, you agree to our Terms , Data Policy and Cookies
            Policy .
          </p>

          <h6>
            Have an account <Link to='/login'> Log In</Link>
          </h6>
        </form>
      </div>
    </div>
  )
}

export default Register
