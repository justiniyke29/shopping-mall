import React, {useState, useEffect} from 'react'
import Link from 'next'
import {BsBagCheckFill} from 'react-icons/bs'
import {useStateContext} from '../context/StateContext'

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} =useStateContext()
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thanks for your purchase!!!</h2>
            <p className='email-msg'> Check your email for reciept of purchase</p>
            <p className='description'> 
            In case of any complaints, please message 
            <a className='email' href='mailto:justinike29@yahoo.com'>
            justinike29@yahoo.com
            </a>
            </p>
            <Link href="/">
                <button type='button' width="300px" className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success