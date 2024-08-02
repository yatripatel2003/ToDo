import './Footer.css'
const Footer = () => {
    return (
        <>

            <div className="main-wrap">
                <div className="footer-wrap">
                    <div className="footer-wrap-1">
                        <div className="footer-section">
                            <h1>About</h1>
                            <a href="#">Services</a>
                            <a href="#">Portfolio</a>
                            <a href="#">Pricing</a>
                            <a href="#">Careers</a>
                        </div>
                        <div className="footer-section">
                            <h1>Resources</h1>
                            <a href="#">Docs</a>
                            <a href="#">Blog</a>
                            <a href="#">eBooks</a>
                            <a href="#">Videos</a>
                        </div>
                        <div className="footer-section">
                            <h1>Contact</h1>
                            <a href="#">Help</a>
                            <a href="#">Sales</a>
                            <a href="#">Advertise</a>
                        </div>
                        <div className="footer-section">
                            <h1>Stay Connected!!</h1>

                            <form action="">
                                <h5>For any queries:</h5>
                                <br />
                                <input type="email" name="email" id="email" placeholder="Enter Email Address" />
                                <br></br>
                                <br></br>
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    {/* <div className="footer-wrap-2">
                        <div className="line"></div>
                        <div className="social-link">
                            <a href="#">
                                <img src="./fb.jpeg" alt="Facebook" />
                            </a>
                            <a href="#">
                                <img src="./google.jpeg" alt="Google" />
                            </a>
                            <a href="#">
                                <img src="./linkedin.png" alt="linkedin" />
                            </a>
                            <a href="#">
                                <img src="./twitter.png" alt="twitter" />
                            </a>
                        </div>
                    </div> */}
                </div>
                <div className="footer-bottom">
                    <div className="first-box">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="last-box">
                        <a href="#">&copy; Copyright 2021 Wavefire Coding. Inc</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer