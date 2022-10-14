import React from 'react'
import { AiFillGithub, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 JMS Mobile phones, All rights reserved</p>
      <p className='icons'>
        <a href='https://github.com/justiniyke29' target='_blank'><AiFillGithub /></a>
        <a href='https://web.facebook.com/ikechukwu.anyanwu2' target='_blank'><AiFillFacebook /></a>
        <a href='https://www.linkedin.com/in/ikechukwu-anyanwu-42040a242/' target='_blank'><AiFillLinkedin /> </a>
        <a href='https://twitter.com/justiniyke29' target='_blank'><AiOutlineTwitter /></a>
      </p>
    </div>
  )
}

export default Footer