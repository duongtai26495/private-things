import React from 'react'
import { Link } from 'react-router-dom'
import { CURRENT_SIDEBAR } from '../data/constants'
import { items as menu_items } from '../data/data-menu'
import { useStore } from '../store'
import { updateCurrentSidebar } from '../store/action'
import LogoHeader from './LogoHeader'
import Searchbar from './Searchbar'

const Header = () => {

    const items = menu_items

    const [state, dispatch] = useStore()

    const changeSideBar = (sidebar) => {
        dispatch(updateCurrentSidebar(sidebar))
        window.localStorage.setItem(CURRENT_SIDEBAR, sidebar)
    }

    return (
        <div className='w-full h-fit p-2 py-3 shadow flex flex-row gap-5 items-center bg-gray-800 header absolute top-0 left-0'>
            <LogoHeader />
            <ul className='flex flex-row gap-5'>
                {
                    items?.length > 0 &&
                    items?.map((item, index) => (
                        <li onClick={() => changeSideBar(item.name)} key={index} className='text-gray-100 text-base font-semibold'><Link to={item.url}>{item.name}</Link></li>
                    ))
                }
            </ul>
            <Searchbar />
        </div>
    )
}

export default Header