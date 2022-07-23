import * as React from 'react'

type Props = {
    title?: string
}

const ErrorAlert = ({ title = 'An error has occurred.' }: Props) => {
    return (
        <div className="alert alert-danger" role="alert">
            {title}
        </div>
    )
}

export default ErrorAlert
