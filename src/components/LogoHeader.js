import React from 'react'
import { Link } from 'react-router-dom'

const LogoHeader = () => {
  return (
    <Link to={"/"}>
        <p className='w-full flex flex-col rounded-md bg-black hover:bg-gray-900 transition-all px-3 py-3 shadow-md text-end'>
            <span className='text-sm  text-gray-200'>Private</span>
            <span className='text-xl font-bold -mt-2 text-gray-300'>Things</span>
        </p>
    </Link>
  )
}

export default LogoHeader