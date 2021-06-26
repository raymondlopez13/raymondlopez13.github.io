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
    
    return (
        <div className='contact'>
            <h1>Contact Me!</h1>
            <h2><a href='mailto: raymondlopez13@yahoo.com'>Email!</a></h2>
        </div>
    )
}
export default Contact;