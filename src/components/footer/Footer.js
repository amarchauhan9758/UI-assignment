import React from 'react'
import "./footer.css"

function Footer() {
    return (
        <>
            <div>
                <footer className="footer">

                    <div className="footer__content">
                        <div className="footer__logo">

                            <span className='footer-heading'>Info</span>
                            <nav className="footer__links">
                                <ul className='ul-list' >
                                    <li>>Press</li>
                                    <li>>Media</li>
                                    <li>>Internet</li>
                                    <li>>HRMS</li>
                                    <li>>Webmail</li>
                                    <li>>OLT Web</li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                    <div className="footer__content">
                        <div className="footer__logo">

                            <span className='footer-heading'>UseFul links </span>
                            <nav className="footer__links">
                                <ul className='ul-list' >
                                    <li>>Anti-Ragging Policy</li>
                                    <li>>Internal Complaints Committee</li>
                                    <li>>Official Merchandise Store</li>
                                    <li>>Disclaimer</li>
                                    <li>>Privacy Policy</li>
                                    <li>>Privacy Policy Web</li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                    <div className="footer__content">
                        <div className="footer__logo">

                            <span className='footer-heading'>contact us</span>
                            <nav className="footer__links">
                                <ul className='ul-list' >
                                    <li>>Indian Institute of Management Kashipur</li>
                                    <li>>Kundeshwari, Kashipur-244713 Uttarakhand</li>
                                    <li>>Tel:+91-7088270882</li>
                                    <li>>Phone :7900444090</li>

                                </ul>
                            </nav>
                        </div>

                    </div>
                    <div className="footer__content">
                        <div className="footer__logo">

                            <span className='footer-heading'>Locate US</span>
                            <nav className="footer__links">
                               <img src="https://www.google.com/maps/vt/data=fzfpQgJL5inmYAhKLScJppfQFzWQqvF3z1N-ZGvs8EbI5SPT36tNFL8VyZZqTADpihN0XvtItfyZ-bxqsSiwU5L2D2S4RFy13wRxfZIrRhN1tO2I1vJf6h--L00hXy1B_vIzrrY2X1yY1obSHEWf3ZfqHZKmrAzOAcZ2jn5GZ1RP9ZGztP9jOfognTsFvbHR4TZi" alt="location" />
                            </nav>
                        </div>

                    </div>

                </footer>
                <div className="footer__bottom">
                    <p>Copyright © 2023 | Indian Institute of Management Kashipur</p>
                </div>

            </div>


        </>
    )
}

export default Footer;