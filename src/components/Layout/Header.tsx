import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { NavbarPage } from '@/types'

const pages: NavbarPage[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Search',
        path: '/search',
    },
    {
        title: 'Filter by Capital',
        path: '/filter-by-capital',
    },
]

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-primary shadow-sm sticky-top">
            <div className="container d-flex  flex-column">
                <a className="navbar-brand" href="#">
                    Countries App
                </a>

                <div className="navbar-nav d-flex flex-row gap-4">
                    {pages.map((page) => (
                        <NavLink
                            key={page.path}
                            to={page.path}
                            className={({ isActive }) => clsx('nav-link', isActive && 'active')}
                        >
                            {page.title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Header
