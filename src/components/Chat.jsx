import React from 'react'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Ritik</span>
           <div className='chatIcons'>
             <img style={{height:"25px", width:"25px"}} src={Cam} alt=''/>
             <img style={{height:"25px", width:"25px"}} src={Add} alt=''/>
             <img style={{height:"25px", width:"25px"}} src={More} alt=''/>
           </div>
           </div>
           <Messages/>
           <Input/>
    </div>
  )
}

export default Chat
