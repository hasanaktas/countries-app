import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import services from '@/services'
import { Country } from '@/types'

const useCountries = () => {
    return useQuery<Country[]>(['countries'], () => services.getAllCountries())
}

export default useCountries
