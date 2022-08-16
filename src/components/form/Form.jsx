

import React, { useRef } from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';
const Form = () => {
    const form = useRef();

    // const [enteredName, setEnteredName] = useState('')
    // const [enteredEmail, setEnteredEmail] = useState('')
    // const [enteredMessage, setEnteredMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f54hsyn','template_1krk129', form.current,'TFmgrxT_Wp2nbHw3j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        })
    }    
    
  return <form className='form' ref={form} onSubmit={sendEmail}>
    <div className="form__input">
        <input type="text" placeholder='Your Name'  name="name"  />
    </div>

    <div className="form__input">
        <input type="email" placeholder='Your Email' name="email"  />
    </div>

    <div className="form__input">
        <textarea placeholder='Write Message' name="message"></textarea>
    </div>

    <button className="submit__btn" type='submit'>
        Submit
    </button>
  </form>
}

export default Form
