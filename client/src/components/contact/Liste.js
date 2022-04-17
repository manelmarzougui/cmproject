import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from '../../Js/actions/userAction'
import Contact from './Contact'
import "./contact.css"

const Liste = () => {
  const [text, settext] = useState('')
  const dispatch = useDispatch()
   useEffect(() => {
     dispatch(getusers())
   }, [])
  const users = useSelector((state) => state.userReducer.users)
  console.log(users)
  return (
    <div className='recherche' >
     
      <input 
        type='text'
        placeholder='Rechercher...'
        onChange={(e) => settext(e.target.value)}
      />

      <div className='procard'>
        {users ? (
          users
            .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))

            .map((el) => <Contact user={el} />)
        ) : (
          <h3>loading</h3>
        )}
      </div>
    </div>
  )
}

export default Liste