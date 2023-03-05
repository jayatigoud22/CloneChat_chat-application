import React, { useContext } from 'react'
import cam from "../image/cam.png"
import friends from "../image/friends.png"
import more from "../image/more.png"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'
const Chat = () => {


  //Another Variable not be there if we want to acccess the userInfo
  //then we need to use same data application
  const {data} = useContext(ChatContext);
  return ( 
    <div className='chat'> 
       <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={friends} alt="" />
          <img src= {more} alt="" />

        </div>
     
     </div>
     <Messages />
     <Input />
    </div>
  )
}
 
export default Chat