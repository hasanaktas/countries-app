import * as React from 'react'
import { Country } from '@/types'
import ErrorAlert from '../ErrorAlert'
import CountryModal from '../CountryModal'
type Props = {
    countries?: Country[]
}

const CountriesTable = ({ countries }: Props) => {
    const [selectedCountry, setSelectedCountry] = React.useState<Country | undefined>(undefined)

    const handleClick = React.useCallback((country: Country) => {
        setSelectedCountry(country)
    }, [])

    if (!countries) {
        return null
    }

    if (countries.length === 0) {
        return <ErrorAlert title="Country Not Found" />
    }

    return (
        <>
            <table className="table table-striped table-hover ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="d-none d-sm-table-cell">Capital</th>
                        <th className="d-none d-sm-table-cell">Region</th>
                        <th className="text-center">Flag</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => {
                        return (
                            <tr
                                onClick={() => handleClick(country)}
                                key={country.alpha2Code}
                                role="button"
                                className="cursor-pointer"
                                data-bs-toggle="modal"
                                data-bs-target="#countryModal"
                            >
                                <td>{country.name}</td>
                                <td className="d-none d-sm-table-cell" style={{ width: 250 }}>
                                    {country.capital}
                                </td>
                                <td className="d-none d-sm-table-cell" style={{ width: 200 }}>
                                    {country.region}
                                </td>
                                <td style={{ width: 100 }} className="text-center">
                                    <img alt={country.name} src={country.flag} style={{ width: 50, height: 30 }} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <CountryModal country={selectedCountry} />
        </>
    )
}

export default CountriesTable
