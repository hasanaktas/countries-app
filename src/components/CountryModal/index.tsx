import { Country } from '@/types'

type Props = {
    country?: Country
}
const CountryDetailPage = ({ country }: Props) => {
    return (
        <div
            className="modal fade"
            id="countryModal"
            tabIndex={-1}
            aria-labelledby="countryModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="countryModalLabel">
                            Country Detail
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex flex-column align-items-center">
                        {country && (
                            <>
                                <img
                                    alt={country.name}
                                    src={country.flag}
                                    style={{
                                        width: 120,
                                        height: 'auto',
                                        borderRadius: 5,
                                    }}
                                />
                                <ol className="list-group align-self-stretch mt-4">
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Name</div>
                                            {country.name}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Native Name</div>
                                            {country.nativeName}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Region</div>
                                            {country.region}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Sub Region</div>
                                            {country.subregion}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Capital</div>
                                            {country.capital}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Population</div>
                                            {country.population}
                                        </div>
                                    </li>

                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Alpha2 Code</div>
                                            {country.alpha2Code}
                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Alpha3 Code</div>
                                            {country.alpha3Code}
                                        </div>
                                    </li>
                                </ol>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryDetailPage
