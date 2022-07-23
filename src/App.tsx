import * as React from 'react'
import { useRoutes } from 'react-router-dom'
import { createRoutes } from '@/pages'

const App = () => {
    const routes = useRoutes(createRoutes())
    return routes
}

export default App
