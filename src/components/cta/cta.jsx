import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';

import './cta.css'
import {RiCloseCircleFill} from 'react-icons/ri';
import {FaCheck, FaExclamation} from 'react-icons/fa';

// import Contact from './contact';


const cta = () => {

  const [openForm, setOpenForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

    const formActive = () => {
      setOpenForm(!openForm)
      }
//    
    const successTimer = ()=> {
      setSuccess(!success)

      setTimeout(() => {
        setSuccess(false)
      }, 5000);
    }
    const errorTimer = ()=> {
          setError(!success)

          setTimeout(() => {
            setError(false)
          }, 5000);
        }
      

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    setSending(true)
    e.preventDefault();

    emailjs.sendForm('service_hwwueqk', 'template_mkg583a', form.current, 'KNFMeMaycUD0P6ZME')
      .then((result) => {
          // console.log(result.text);
          formActive()
          successTimer();
          setSending(false);
          }, (error) => {
          // console.log(error.text);
          formActive();
          errorTimer();
          setSending(false);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className='subject'>
          <div className='input_wrap'>
            <label>Name</label>
            <input type="text" name="from_name" className='input' placeholder='your name'/>
          </div>
          <div className='input_wrap'>
            <label>Email</label>
            <input type='email' name="from_email"  placeholder='example@domain.com' className='input'/>
          </div>
        </div>
        <div className='input_wrap message'>
          <label>Message</label>
          <textarea placeholder='type your message here...' className='input textarea' name='message'/>
        </div>

        <input type="submit" onClick={sendEmail} value={sending? "sending": "send"} className=' cta__button send-btn' />
    </form>
  );
};

      // 
  return (
    <div id='cta' className='web__cta section__padding '>
      <div className='web__cta_wrap section__padding'>
        <div className='web__cta_wrap-text'>
            <h3 className='gradient__text'>Feel Free To Send A Buzz!</h3>
            <p className='p__text'>Do you have a project in mind, thinking of hiring me or you just want to say hello. feel free... </p>
            {success && <div className='success_wrap'>
                <div className='success_message pop-in' onClick={()=>{
                  setSuccess(false)
                }}>
                  <FaCheck className='icon'/>
                  <p > message <br/>sent </p>
                </div>
              </div> }
            {error && <div className='error_wrap'>
              <div className='error_message pop-in' onClick={()=>{
                  setError(false)
                }}>
                  <FaExclamation className='icon'/>
                  <p>error!<br/>not sent</p>
              </div>
            </div>}


        </div>
        <div className='web__cta-btn cta__button' onClick={formActive}>Contact</div>
      </div>
      {openForm && <div className='offset-full fade-in'>
          <div className='web__form-wrap'>
          <RiCloseCircleFill className='web-close ' title='close this tab' onClick={formActive}/>
            <h3 className='gradient__text'>Say Hello</h3>
               <Contact/>
        </div> 
      </div>}
    </div>
  )
}

export default cta