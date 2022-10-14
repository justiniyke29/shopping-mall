import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import {useStateContext} from '../context/StateContext'
import { runFireworks } from '../lib/utility'

const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} =useStateContext()

    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
    }, [])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thanks for your purchase!!!</h2>
            <p className='email.msg'>Check your email for receipt of purchase</p>
            <p className='description'>
                For more information, please send an email to
            <a className='email' href='mailto:justiniyke1995@gmail.com'>
                justiniyke1995@gmail.com
            </a>
            </p>
            <Link href="/">
                <button type="button" width='300px' className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success