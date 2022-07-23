import { countriesApi } from '@/utils'

const getAllCountries = async () => {
    const res = await countriesApi.get('/all')
    return res.data
}

export default {
    getAllCountries,
}
