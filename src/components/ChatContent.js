import React, { useEffect, useState } from 'react'
import { UID } from '../data/constants'
import { data_message } from '../data/sample-chat-data'
import { useStore } from '../store'
import MessageList from './MessageList'

const ChatContent = () => {

    const [state, dispatch] = useStore()
    const {current_chat} = state
    const [chats, setChats] = useState({})
    const displayChatContent = (uid) => {
        const current_id = window.localStorage.getItem(UID)
        let chat_list = data_message.filter(
            item => item.receiver == uid || item.sender == uid)
        // data_message.forEach((item)=>{
        //     if(item.sender == uid || item.receiver == current_id || item.sender == current_id || item.receiver == uid){
        //         chat_list.push(item)
        //     }
        // })
        setChats(chat_list)
    }

    useEffect(()=>{
        displayChatContent(current_chat)
    },[current_chat])

    return (
        <div className='h-full flex-1'>
            {
                current_chat != "" 
                ?
                <MessageList chats={chats} />
                :
                "No chats"
            }
        </div>
    )
}

export default ChatContent