import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import { useStore } from '../store'

const Authen = () => {

    const [state, dispatch] = useStore()
    const { login_state } = state    
    
    const navigate = useNavigate()

    useEffect(()=>{
        navigate("/profile")
    },[login_state])

    const [statusSwitch, setStatus] = useState(true)

    return (
            <div className='w-full md:w-1/5 m-auto authen-form shadow-sm rounded-md overflow-hidden'>
                <div className='w-full flex flex-row text-center '>
                    <p onClick={() => { setStatus(true) }} className={`cursor-pointer  w-1/2 p-2 text-gray-100 font-bold hover:bg-gray-600 hover:text-white transition-all ${statusSwitch ? 'bg-gray-700 text-white' : 'bg-slate-100  text-gray-600'}`}>
                        Login
                    </p>
                    <p onClick={() => { setStatus(false) }} className={`cursor-pointer text-gray-100 w-1/2 p-2 font-bold hover:bg-gray-600 hover:text-white transition-all ${!statusSwitch ? 'bg-gray-700 text-white' : 'bg-slate-100  text-gray-600'}`}>
                        Register
                    </p>
                </div>
                <div className='p-5  bg-gray-700'>
                {
                    statusSwitch
                        ?
                        <Login />
                        :
                        <Register />
                }
                </div>
               
            </div>
    )
}

export default Authen