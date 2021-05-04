import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

import './Contact.scss';

const Contact = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
            return
        } else {
            emailjs.sendForm('service_01elct6', 'template_gvuf00e', e.target, 'user_UqeGWwS8gsc2DAxvMXZSD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        }
    }

    return (
        <div className='contact' style={{ backgroundImage: "url('/images/contact-bg.png')"}} id='contact'>  
            <h1 className='contact__header'>Contact me</h1>
            <form onSubmit={sendEmail} className='contact__form'>
                <div className='contact__form-content'>
                    <div className='contact__form-box'>
                        <input onChange={(e) => setName(e.target.value)} value={name} className='contact__input' type='text' placeholder='name' name='name' />
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='contact__input' type='email' placeholder='e-mail' name='email' />
                    </div>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='contact__textarea' placeholder='your message' name='message'/>
                </div>
                <button type='submit' className='contact__btn'><img className='contact__btn-icon' alt='icon' src='/images/letter-icon.png' /></button>
            </form>
            <div className='contact__box'>
                <img className='contact__icon' src='/images/contact-icon.png' alt='icon' />
                <h2 className='contact__contact'>dudafilip80@gmail.com</h2>
            </div>
            <div className='contact__box'>
                <img className='contact__icon' src='/images/telephone-icon.jpg' alt='icon' />
                <h2 className='contact__contact'>+420 737 645 376</h2>
            </div>
        </div>
    ) 
};

export default Contact;