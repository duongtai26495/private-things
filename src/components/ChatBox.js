import React from 'react'
import ChatContent from './ChatContent'
import ChatInput from './ChatInput'

const ChatBox = () => {
  return (
    <div className='h-full w-full flex flex-col '>
        <ChatContent />
        <ChatInput />
    </div>
  )
}

export default ChatBox