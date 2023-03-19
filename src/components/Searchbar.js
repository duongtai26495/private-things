import React, { useState } from 'react'

const Searchbar = () => {

    const [result, setResult] = useState([])

    return (
        <div className='flex flex-row p-2 relative'>
            <input className='w-full p-2 rounded-xl bg-slate-700 text-gray-100' type={'text'} placeholder={"kai@gmail.com"} />

            {
                result.length > 0
                ??
                <div className='w-full absolute top-14 left-0 p-2 bg-white'>
                </div>
            }
        </div>
    )
}

export default Searchbar