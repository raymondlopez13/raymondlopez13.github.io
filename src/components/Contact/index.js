import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [ errorMessage, setErrorMessage ] = useState('');
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <div className='contact'>
            <h2>Contact Me!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Name'>Name:</label>
                <input type="text" name='Name' onBlur={handleChange} defaultValue={name} />
                <label htmlFor='Email'>Email:</label>
                <input type="email" name='Email' onBlur={handleChange} defaultValue={email} />
                <label htmlFor="Message">Message:</label>
                <textarea rows='5' name='Message' onBlur={handleChange} defaultValue={message}></textarea>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Contact;