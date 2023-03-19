import React from 'react'
import { CURRENT_CHAT } from '../data/constants'
import { useStore } from '../store'
import { updateCurrentChat } from '../store/action'

const ContactRow = ({contact}) => {

    const [state, dispatch] = useStore()
    const {current_chat} = state

    const setCurrentChat = (current_chat) => {
        dispatch(updateCurrentChat(current_chat))
        window.localStorage.setItem(CURRENT_CHAT, current_chat)
    }

  return (
    <div onClick={()=> setCurrentChat(contact.uid)} className={`border-b  ${contact.uid == current_chat ? 'bg-cyan-700' : 'bg-slate-900'} border-neutral-800 flex flex-row items-center gap-3 p-2 hover:bg-opacity-10 transition-all hover:bg-white cursor-pointer`}>
    <div className='contact-avatar relative flex flex-col'>
    <img src={contact.photoUrl} className="contact-img" />
    <span className={`status-dot ${contact.isLoggedIn == 1 ? 'bg-green-500' : 'bg-gray-500'}`}></span>
    </div>
    <div className='flex flex-col'>
    <p className='text-md font-bold mb-2'>{contact.fullname}</p>
    <p className='text-xs p-1 bg-slate-700 rounded-sm overflow-hidden whitespace-nowrap'>{contact.last_message?.length > 30 ? contact.last_message.slice(0,30) + "..." : contact.last_message }</p>
    </div>
    </div>
  )
}

export default ContactRow