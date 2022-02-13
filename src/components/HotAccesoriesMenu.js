import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessorieMenu.css"

const HotAccesoriesMenu = () => {
  return (
    <div className='HotAccesoriesMenu'>
        <Link className='HotAccessoryLink' to='/music'> Music Store</Link>
        <Link className='HotAccessoryLink' to='/smartDevice'> Smart Devices</Link>
        <Link className='HotAccessoryLink' to='/home'> Home</Link>
        <Link className='HotAccessoryLink' to='/lifestyle'> Lifestyle</Link>
        <Link className='HotAccessoryLink' to='/mobileAccesories'> Mobile Accessories</Link>

    </div>
  )
}

export default HotAccesoriesMenu