import React from 'react'
import { UID } from '../data/constants'

const MsgRow = ({ chat }) => {

    const DisplayChatRow = () => {
        const current = window.localStorage.getItem(UID)
        if (chat.sender == current) {
            return msgSender(chat)
        } else {
            return msgReceiver(chat)
        }

    }

    const msgReceiver = (chat) => {
        return (
            <p className='bg-white text-gray-800 w-fit h-fit p-2 float-left rounded-b rounded-r'>
                {chat.msg}
            </p>
        )
    }

    const msgSender = (chat) => {
        return (
            <p className=' bg-sky-600 text-white  w-fit h-fit p-2 float-right rounded-l rounded-bl rounded-br'>
                {chat.msg}
            </p>
        )
    }

    return (
        <div className='p-2'>
            <DisplayChatRow />
        </div>


    )
}

export default MsgRow