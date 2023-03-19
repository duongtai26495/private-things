import React from 'react'

const TheButton = ({ style, onclick = () => { }, title, icon, isLoading = false }) => {
    return (
        isLoading == true
            ?
            <div className={`bg-gray-500 cursor-pointer w-full rounded-sm shadow-sm ${style}`} >
                Waiting...
            </div>
            :
            <div onClick={onclick} className={`cursor-pointer w-full rounded-sm shadow-sm ${style}`} >
                {title}
            </div>
    )
}

export default TheButton