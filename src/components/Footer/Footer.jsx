import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="ftabout"> <img src="images/logo.png" alt="" width='100px' />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum has been the industry</p>
                                <ul className="socialLinks">
                                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" title="Google+"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" title="Whatsapp"><i className="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3>Useful Links</h3>
                            <ul className="footernav">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3>Wedding Services</h3>
                            <ul className="footernav">
                                <li><a href="#">Search Bride</a></li>
                                <li><a href="#">Search Groom</a></li>
                                <li><a href="#">Profile Tips</a></li>
                                <li><a href="#">Security Tips</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h3>Contact Us</h3>
                            <ul className="footer-adress">
                                
                                <li className="footer_email">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span><a href="#">1105 Roosevelt Street, GA
                                        Atlanta</a></span>
                                </li>

                                <li className="footer_email">
                                    <i className="far fa-envelope"></i>
                                    <span><a href="#">Info@yourdomain.com</a></span>
                                </li>

                                <li className="footer-phone">
                                    <i className="fas fa-phone-alt"></i>
                                    <span><a href="#">(770) 123 4567</a></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyRight */}

            <div className="copyright-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="copyight">Copyright StrangeWeb  All rights reserved.</div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="policy">Design and Developed by: <a href="#">stranger.in</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
