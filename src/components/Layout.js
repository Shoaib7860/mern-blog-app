import React from 'react'
import Headder from './Headder'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <main>
        <Headder />
        <Outlet />
    </main>
    </>
  )
}

export default Layout