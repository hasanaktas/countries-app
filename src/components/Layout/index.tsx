import * as React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <Header />
            <div className="container pt-4 d-flex flex-column align-items-center">
                <Outlet />
            </div>
        </>
    )
}

export default Layout
