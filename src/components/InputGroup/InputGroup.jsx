import './InputGroup.css'


const InputGroup = ({ label, id, name, type, placeholder, register, error}) => {
    return (
        <div className="input-container">
            <label htmlFor={id} className="form-label register-label"> 
                {label}
            </label>
            <input
                name={name}
                type={type}
                className={` login__input input form-control ${error ? 'is-invalid' : ''}`}
                id={id}
                placeholder={placeholder}
                {...register(id)}
            />
            <p className='invalid-feedback'>{error}</p>
        </div>
    )
}

InputGroup.defaultProps = {
    type: 'text'
}

export default InputGroup 