import * as React from 'react'
import { useCountries } from '@/hooks'
import { CountriesTable, TablePagination, ErrorAlert, Spinner } from '@/components'

const pageLimit = 20

const HomePage = () => {
    const { data, isLoading, isError } = useCountries()
    const [activePage, setActivePage] = React.useState<number>(1)

    const filteredData = React.useMemo(() => {
        return data?.filter((_, index) => pageLimit * activePage > index && index >= (activePage - 1) * pageLimit)
    }, [data, activePage])

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <ErrorAlert />
    }

    return (
        <>
            <CountriesTable countries={filteredData} />
            <TablePagination
                pageLimit={pageLimit}
                total={data.length}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </>
    )
}

export default HomePage
