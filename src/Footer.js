import React from 'react'
import './Footer.css';
import {Translate,Facebook,Instagram,Twitter} from '@material-ui/icons'

function Footer(){
    return (
        <>
        <div className="footer">
            <div className="footer__box">
                <div className="footer__innerbox">
                    <div className="footer__inner1">
                    <img alt="Uber Eats"  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c266ad32e5e88af804b3a1b6b60098f9.svg" width="146" height="24"  />
                    <div className="footer__inner1footer">
                    <img alt="Download on the App Store"  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d0558d91063038236b60e3ef71fdc1fd.svg" />
                    <img alt="Get it on Google Play" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/cf6dad406fdfdcd290fd40de9008ae50.png"   />
                    
                    </div>
                    </div>
                    <div className="footer__inner2">
                        <h3> About Uber Eats </h3>
                        <h3> Read our blog  </h3>
                        <h3> Buy gift cards </h3>
                        <h3> create a business account </h3>
                        <h3> add your restaurant </h3>
                        <h3> sign up to deliver  </h3>

                    </div>
                    <div className="footer__inner3">
                    <h3> Get Help</h3>
                        <h3> View all cities </h3>
                        <h3> view all countries </h3>
                        <h3> Restaurants near me </h3>
                        <h3> Save on your first order </h3>
                        <h3 className="footer__english"  > <Translate /> English </h3>

                    </div>

                </div>
                <div className="footer__innerbox2">
                    <hr  />
                    <div className="footer__innerbox21">
                        <div className="footer__innerbox2icons">
                            <Facebook  />
                            <Twitter />
                            <Instagram />

                        </div>
                        <div className="footer__innerbox2info">
                            <h3>Privacy Policy </h3>
                            <h3> Terams </h3>
                            <h3> Pricing </h3>

                        </div>



                    </div>
                    <div className="footer__innerbox22">
                        <h3> This site is protected by reCAPTCHA and the Google <span> Privacy Policy </span>  and <span>Terms of Service  </span>  apply. </h3>
                        <h3> &copy; 2021 Uber Technologies Inc.   </h3>


                    </div>

                </div>

            </div>


        </div>


        </>
    )
}


export default Footer