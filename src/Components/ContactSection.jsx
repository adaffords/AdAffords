import React from 'react'

const ContactSection = () => {
    return (
        <section className="contactSection">
            <div className="contact-top">
                <div className="top-first">
                    Connect
                </div>
                <h1 className="top-second">
                    Get in Touch
                </h1>
            </div>
            <div className="contact-bottom">
                <div className="left">
                    <form action="https://formspree.io/f/xvgolpya" method='POST' className="contact-form">
                        <div>
                        <label htmlFor="name">FullName:</label>
                        <input type="text" placeholder='Enter your full name here' required name='Name' id='name' />
                        </div>
                        <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder='Enter your email here' required name='Email' id='email' />
                        </div>
                        <div>
                        <label htmlFor="message">Your Message:</label>
                        <textarea name="Message" placeholder='Enter your message here' required id="message"></textarea> 
                        </div>
                        <input type="submit" value="Submit" id="submit"/>
                    </form>
                </div>
                <div className="right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343.2933073613141!2d79.90663792203767!3d27.8688004197774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fbdb972551f0f%3A0x1a9cf3785a577914!2sGYM360%20Fitness%20Center!5e1!3m2!1sen!2sin!4v1733236940041!5m2!1sen!2sin" title='location' width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactSection