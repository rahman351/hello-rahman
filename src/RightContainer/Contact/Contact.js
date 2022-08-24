import './Contacts.css'


const Contact = () => {
    return (
        <div className="contact-parent-container">
            <div className="contact-main">
                <div className="contact-heading">
                    Contact Me
                </div>
                <div className="contact-container">
                    <div className="contact-box">
                        <div className="contact-icon">
                            <img src="/linkedin.svg" alt='linkedin' width="50px" className='logo'></img>
                        </div>
                        <div className="contact-details">
                            <a href='https://www.linkedin.com/in/k-syed-rahmanudeen-6397251a1/'>
                                https://www.linkedin.com/in/k-syed-rahmanudeen-6397251a1/
                            </a>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="contact-icon">
                            <img src="/gmail.png" alt='gmail' width="50px" className='logo'></img>
                        </div>
                        <div className="contact-details">
                            <a href='mailto:itzemerahmansyed@gmail.com'>
                                itzemerahmansyed@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="contact-icon">
                            <img src="/call.png" alt='call' width="50px" className='logo'></img>
                        </div>
                        <div className="contact-details">+91-9562899244</div>
                    </div>
                </div>
            </div> 
        </div>   
    );
}
 
export default Contact;