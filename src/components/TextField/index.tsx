type Props = {
    label: string
    placeholder?: string
    value?: string | number | readonly string[]
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const TextField = ({ label, placeholder, value, onChange }: Props) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input value={value} onChange={onChange} type="text" className="form-control" placeholder={placeholder} />
        </div>
    )
}

export default TextField
