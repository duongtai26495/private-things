import React from 'react'
import MsgRow from './MsgRow'

const MessageList = ({chats}) => {
  return (
    <div className='w-full flex flex-col'>
        {
            chats?.length > 0 
            ?
                chats?.map ((chat, index)=>(
                    <MsgRow key={index} chat={chat} />
                ))
            :
            "No chat"
        }
    </div>
  )
}

export default MessageList