import React, { useEffect } from 'react'
import { useStore } from '../store'
import ContactList from './ContactList'
import ProfileSideBar from './ProfileSideBar'

const Sidebar = () => {

    const [state, dispatch] = useStore()
    const { current_sidebar } = state

    useEffect(()=>{
    },[current_sidebar])

    const SIDEBAR_VIEW = () => {
        switch (current_sidebar) {
            case 'Home':
                return (<ContactList />)
            case 'Profile':
                return (<ProfileSideBar />)
        }
        
    }

    return (
        <div id='side-bar' className='w-full h-full'>
            <div className='side-bar-content h-full overflow-hidden relative'>
                <SIDEBAR_VIEW />
            </div>
        </div>
    )
}

export default Sidebar