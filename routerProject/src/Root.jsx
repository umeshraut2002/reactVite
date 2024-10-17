import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Herosection from './components/Herosection'
import Mainsection from './components/Mainsection'

const Root = () => {
    return(
        <>
        <Navbar />
        <Herosection />
        <Mainsection />
        <Outlet />
        <Footer />
        </>
    )
}

export default Root;