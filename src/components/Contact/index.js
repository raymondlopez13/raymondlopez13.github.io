import React from 'react';

function Contact() {
    return (
        <div>
            <h2>Contact Me!</h2>
            <form>
                <label for='name'>Name:</label>
                <input type="text" name='name' />
                <label for='email'>Email:</label>
                <input type="email" name='email' />
                <label for="message">Message:</label>
                <textarea rows='5' name='message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Contact;