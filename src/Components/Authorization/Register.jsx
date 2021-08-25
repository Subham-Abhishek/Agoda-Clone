import { Typography, FormControlLabel, Checkbox, withStyles } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Auth-page.css"
import { Loading } from './Loading'
import GoogleLogin from 'react-google-login'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import Recaptcha, { ReactRecaptcha } from 'react-recaptcha';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom'


export const Register = () => {
    const [isLoading, setLoading] = useState(true)
    const [isAuth, setAuth] = useState(false)

    useEffect(() => {
        setLoading(true)
        let timer = setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            clearTimeout(timer)
        }
    }, [])
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    function responseGoogle(response) {
        console.log(response);
        console.log(response.profileObj);
    }
    if(isAuth){
        return <Redirect to="/"/>
    }
    return (
        isLoading ? <Loading /> :
        <div className="resister-page">
                <div className="signup">
                    <Typography>
                        SignUp
                    </Typography>
                    <div className="mode-switch">
                        <div className="auth-active">
                            EMAIL
                        </div>
                        <div className="auth-disabled">
                            MOBILE
                        </div>
                    </div>
                    <div className="inputs">
                        <label>First Name</label>
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div className="inputs">
                        <label>Last Name</label>
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="inputs">
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="inputs">
                        <label>Password</label>
                        <input type="password" placeholder="First Name" />
                    </div>
                    <div className="inputs">
                        <label>Password</label>
                        <input type="text" placeholder="Password" />
                    </div>
                    <div className="confirm">
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="Email me exclusive Agoda promotions.  I can opt out later as stated in the Privacy Policy."
                        />
                    </div>
                    {/* <div>

                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                    </div> */}
                    <button className="signup-btn">Sign Up</button>
                    <div className="break">
                        <div className="line"></div>
                        <p>or continue with</p>
                        <div className="line"></div>
                    </div>
                    <div className="buttons" style={{ border: "2px solid #a6a6a6" }} variant="outlined">
                        {/* <GoogleLogin
                            clientId="979909697763-pe6gr2hbnarqpvdj31fh3ak86gfacg7a.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}

                        /> */}
                    </div>
                    <div className="social">
                        <div className="buttons" style={{ border: "2px solid black" }} variant="outlined">
                            <FaApple style={{ marginRight: "90px", width: 25, height: 25 }} /> Sign in with Apple
                        </div>

                        <div className="buttons" style={{ border: "2px solid #1877f2", color: "#1877f2" }} variant="outlined">
                            <SiFacebook style={{ marginRight: "75px", width: 25, height: 25 }} /> Sign in with Facebook
                        </div>
                    </div>
                    <div className="line1"></div>
                    <div className="buttons">Already have an account? <Link to="/login">Sign in</Link></div>
                    <p>By signing in, I agree to Agoda's Terms of Use and Privacy Policy.</p>
                </div>

                </div>
            
    )
}
