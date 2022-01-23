import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();

    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8yjyc3p', 'template_7o3kgsb', formRef.current, 'user_njTM3sLvQ4OyQq1ZZzxv0')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                setTimeout(() => {
                    setDone(false);
                }, 5000);
                document.getElementById("c-form").reset();
            }, (error) => {
                console.log(error.text);
            });
        
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper" style={{ backgroundColor: darkMode && "#222" }}>
                <div className="c-left">
                    <h1 className="c-title">Let's Collaborate</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt="phone"
                                className="c-icon"
                            />
                            +91-9958571929
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt="email"
                                className="c-icon"
                            />
                            vbhavya269@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt="address"
                                className="c-icon"
                            />
                            Delhi, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always open to
                        opportunities if the right project comes along.
                    </p>
                    <form id= "c-form" ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && (<div className="thankyou">
                            Thank You, message sent!
                        </div>)}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;

