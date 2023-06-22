import React from 'react'
import create from '../img/creator.avif'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat Verse</span>
      <div className='user'>
        <img className="create" src={create} alt=''/>
        <span>Ritik</span>
        <button className='btn'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
