import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer'>
      
      <div className='bloccc contact'>
        <h3>Nous contactes</h3>
        <h6>Sidi bolbeba,Gabes,Tunis</h6>
        <h6>Tel:+21658291512</h6>
        <h6>E-amil:manel.marzougui94@gmail.com</h6>
      </div>
      <div className='  suivezzz'>
        <h3 className='text'>Suivez-Nous</h3>
        <div className=' socio'>
          <a href='https://www.facebook.com/manel.marzougui.5/'>
            <BsFacebook className='icoons' />
          </a>

          <a href='https://www.instagram.com/manelmarzougui/'>
            <BsInstagram className='icoons' />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Footer