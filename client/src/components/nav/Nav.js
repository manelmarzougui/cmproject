import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { AiOutlineLogout } from 'react-icons/ai'
import { MdOutlineAccountCircle } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'
import "./nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
   const navigate = useNavigate()
     const isAuth = localStorage.getItem('token')
     const currentuser = useSelector((state) => state.userReducer.user)
  return (
    <div className='nav_n'>
      <Link to='/'>
        <h3>Contact management</h3>
      </Link>
      <Link to='/liste'>
        <div className='iconn'>
          <h4>Liste of Users</h4>
          <ImUsers className='ico' />
        </div>
      </Link>
      <div className='icons'>
        <div className='icon'>
          <Link to='/dashboard'>
            <MdOutlineAccountCircle className='ico' />

            <h6>Dashboard</h6>
          </Link>
        </div>
        {isAuth ? (
          <>
            <div className='icon'>
              <AiOutlineLogout
                className='ico'
                onClick={() => {
                  localStorage.removeItem('token')
                  navigate('/login')
                }}
              />
              <h6>Deconnecter</h6>
            </div>
          </>
        ) : (
          <div className='icon'>
            <AiOutlineLogout
              className='ico'
              onClick={() => {
                localStorage.removeItem('token')
                navigate('/register')
              }}
            />
            <h6>Connexion</h6>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav