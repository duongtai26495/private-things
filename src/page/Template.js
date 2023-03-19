import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Authen from './Authen'

const Template = () => {
  return (
    <>
        <Routes>
          <Route element={<Authen />} path='/authen' />
        </Routes>
        <Outlet />
    </>
  )
}

export default Template