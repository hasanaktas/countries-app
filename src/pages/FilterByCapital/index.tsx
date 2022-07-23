import * as React from 'react'
import Fuse from 'fuse.js'
import { useCountries } from '@/hooks'
import { CountriesTable, TablePagination, ErrorAlert, Spinner, TextField } from '@/components'

const pageLimit = 20

const SearchPage = () => {
    const { data, isLoading, isError } = useCountries()
    const [activePage, setActivePage] = React.useState<number>(1)
    const [filterText, setFilterText] = React.useState<string>('')

    const fuse = new Fuse(data ?? [], {
        keys: ['capital'],
        includeMatches: false,
        includeScore: false,
        threshold: 0.1,
    })

    const onChangeHandle = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setActivePage(1)
            setFilterText(e.target.value)
        },
        [setFilterText, setActivePage]
    )

    const filteredData = React.useMemo(() => {
        const searchFiltered = filterText ? fuse.search(filterText).map((f) => f.item) : data

        return {
            countries: searchFiltered?.filter(
                (_, index) => pageLimit * activePage > index && index >= (activePage - 1) * pageLimit
            ),
            total: searchFiltered?.length ?? 0,
        }
    }, [data, activePage, filterText])

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <ErrorAlert />
    }

    return (
        <>
            <TextField
                label="Filter by Capital"
                placeholder="Enter the capital name...."
                value={filterText}
                onChange={onChangeHandle}
            />
            <CountriesTable countries={filteredData.countries} />
            <TablePagination
                pageLimit={pageLimit}
                total={filteredData.total}
                activePage={activePage}
                setActivePage={setActivePage}
            />
        </>
    )
}

export default SearchPage
