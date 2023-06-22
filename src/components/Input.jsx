import React from 'react'
import Add from '../img/avatar.svg'
import Attch from '../img/attach.webp'
const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...'/>
      <div className='send'>
       <img  src={Add} alt=''/>
       <input type='file' style={{display:"none"}} id='file'/>
       <label htmlFor='file'>
       <img style={{height:"24px"}} src={Attch} alt=''/>
       </label>
       <button>Send</button>
      </div>
    </div>
  )
}

export default Input
