import React from 'react'
import "./home.css"
import { ImUsers } from 'react-icons/im'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
     
      <img
        src='https://www.softwaresuggest.com/blog/wp-content/uploads/2019/04/contact-management-FB.png'
        alt='logo'
        className='img'
      />
      <div>
        <div className='pr2'>
          <h2>Why contact management system is important </h2>
        </div>
        <div className='grp'>
          <div className='grp-desc'>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
          </div>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdCv-ArdtV6zugtDbS6ptWvilgFV6cbViwBIxiw4KpRLtzCY-xk6HMxMfBJIPo56CWTto&usqp=CAU'
            alt='img'
          />
        </div>
      </div>
    </div>
  )
}

export default Home