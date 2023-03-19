import React from 'react'

const ChatInput = () => {
  return (
    <div className='w-full flex gap-2 flex-row bg-slate-900 border-t rounded-sm border-gray-700 p-3'>
        <input type={'text'} placeholder={"How are you today?... " } className="w-full p-2 bg-transparent" />
        <button className='h-full w-fit p-2 rounded border bg-slate-900'>Send</button>
    </div>
  )
}

export default ChatInput