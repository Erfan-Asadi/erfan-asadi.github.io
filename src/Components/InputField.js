import React, { useState, forwardRef, useImperativeHandle } from 'react';

const InputField = forwardRef(({validation="", onChange, type='text', value='', placeholder='', name='', autoComplete='off', label=''}, ref) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
        setError('');
        onChange(e.target.name, e.target.value);
    }

    function validate() {
        // return true if is valid
        // else return false

        if (validation) {
            const rules = validation.split('|');
            for (let i = 0; i < rules.length; i++) {
                const current = rules[i];

                if (current === 'required') {
                    if (!value) {
                        setError('This field is required')
                        return false;
                    }
                }

                const pair = current.split(':');
                switch (pair[0]) {
                    case 'min':
                        if (value.length < pair[1]) { // if value less than 6
                            setError(`This field must be at least ${pair[1]} character long.`)
                            return false;
                        }
                        break;
                    case 'max':
                        if (value.length > pair[1]) { // if value greater than 12
                            setError(`This field must be no longer than ${pair[1]} character long.`)
                            return false;
                         }
                        break;
                    default:
                        break;
                }
            }
        }

        return true;
    }
    useImperativeHandle(ref, () => {
        return {
            validate: ()=> validate()
        }
    })

    return (
    <div className='input-wrapper'>
        { label && <label>{label}</label> }
        <input
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            type={type}
            value={value ? value : inputValue}
            autoComplete={autoComplete}/>
            {error && (
                <p className='error'>{error}</p>
            )}
    </div>
  )
})

export default InputField