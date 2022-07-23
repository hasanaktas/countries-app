import { Layout } from '@/components'
import { RouteObject, Navigate } from 'react-router-dom'
import FilterByCapitalPage from './FilterByCapital'
import HomePage from './Home'
import SearchPage from './Search'

export const createRoutes = (): RouteObject[] => [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'search',
                element: <SearchPage />,
            },
            {
                path: 'filter-by-capital',
                element: <FilterByCapitalPage />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },
]
