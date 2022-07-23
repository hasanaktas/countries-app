import * as React from 'react'
import clsx from 'clsx'
import { UseStateDispatcher } from '@/types'

type Props = {
    pageLimit: number
    total: number
    activePage: number
    setActivePage: UseStateDispatcher<number>
}

const Pagination = ({ pageLimit, total, activePage, setActivePage }: Props) => {
    const pagination = React.useMemo(() => Array.from({ length: Math.ceil(total / pageLimit) }), [total])

    if (total <= pageLimit) {
        return null
    }
    return (
        <nav>
            <ul className="pagination flex-wrap">
                {pagination.map((_, index) => {
                    return (
                        <li
                            className={clsx('page-item cursor-pointer', index + 1 === activePage && ' active')}
                            onClick={() => setActivePage(index + 1)}
                            key={index}
                            role="button"
                        >
                            <span className="page-link">{index + 1}</span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination
