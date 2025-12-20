import './Form.css';
import { useState, useRef } from 'react';

const fields = [
    { name: 'firstName', label: 'First name', placeholder: 'Enter first name', type: 'text' },
    { name: 'lastName', label: 'Last name', placeholder: 'Enter last name', type: 'text' },
    { name: 'email', label: 'Email', placeholder: 'Enter email', type: 'email' }
];

export const Form = () => {
    const formInitialState = useRef(Object.fromEntries(fields.map(item => [item.name, '']))).current;
    const [formValue, setFormValue] = useState(() => formInitialState);
    const [errors, setErrors] = useState({});
    const formRef = useRef(null);
    const city = useRef(null);
    const mobile = useRef(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue(prev => ({
            ...prev,
            [name]: value
        }));
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };
    const validate = () => {
        const validationError = {};
        Object.entries(formValue).forEach(([key, value]) => {
            if (value.trim() == '') {
                validationError[key] = `${key} is required`;
            }
        })
        if (city.current && city.current.value.trim() === '') {
            validationError['city'] = `city is required`;
        }
        if (mobile.current && mobile.current.value.trim() === '') {
            validationError['mobile'] = `mobile is required`;
        }
        setErrors(validationError);

        return Object.keys(validationError).length === 0
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        alert(JSON.stringify({ ...formValue, mobile: mobile.current ? mobile.current.value : '', city: city.current ? city.current.value : '' }, null, 2));
    };

    const handleReset = () => {
        setFormValue(formInitialState);
        if (formRef.current) {
            formRef.current.reset();
        }
        setErrors({});
    }

    return (
        <div>
            <h2>Form</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="formWrapper">
                {fields.map(item => (
                    <div className="inputWrapper" key={item.name}>
                        <label className="label">{item.label}
                            <input
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                value={formValue[item.name]}
                                onChange={handleChange}
                            />
                        </label>
                        {
                            errors[item.name] && <p className="errorText">{errors[item.name]}</p>
                        }
                    </div>
                ))}
                <label className="label">Mobile<br />
                    <input ref={mobile} type="tel" placeholder="Enter mobile number" className="inputMobile" /></label>

                <br />
                {errors.mobile && <p className="errorText">{errors.mobile}</p>}
                <label className="label">City<br />
                    <select ref={city} className="selectCity">
                        <option value="">Select city</option>
                        <option value="London">London</option>
                        <option value="Manchester">Manchester</option>
                    </select></label>

                <br />
                {errors.city && <p className="errorText">{errors.city}</p>}
                <button type="submit" className="submitButton">
                    Submit
                </button>
                <h2>Live Preview</h2>
                <p>{JSON.stringify(formValue, null,2)}</p>
                <p>{`mobile: ${mobile.current?.value}`}</p>
                <p>{`city: ${city.current?.value}`}</p>
                <button className="submitButton" type="button" onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
};
