import {
  Typography,
  FormControlLabel,
  Checkbox,
  withStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Auth-page.css";
import { Loading } from "./Loading";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import Recaptcha, { ReactRecaptcha } from "react-recaptcha";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, Redirect } from "react-router-dom";
import { Navbar } from "../Landing/Navbar/Navbar";
import { Footer } from "../Landing/Footer/Footer";
import IsAuth from "../../context/Auth";

export const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const Auth = useContext(IsAuth);
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  function responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj);
    Auth.user = response;
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    Auth.toggle(!Auth.isAuth);
    console.log(Auth);
  }
  if (Auth.isAuth) {
    return <Redirect to="/" />;
  }
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <div className="resister-page">
        <div className="signup">
          <Typography variant="h6" style={{ fontSize: 25, fontWeight: 500 }}>
            Sign up
          </Typography>
          <div className="mode-switch">
            <div className="auth-active">EMAIL</div>
            <div className="auth-disabled">MOBILE</div>
          </div>
          <div className="inputs">
            <label>First name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div className="inputs">
            <label>Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
          <div className="inputs">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="inputs">
            <label>Confirm Password</label>
            <input type="text" placeholder="Confirm Password" />
          </div>
          <div className="confirm">
            <FormControlLabel
              style={{ fontSize: 10 }}
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Email me exclusive Agoda promotions.  I can opt out later as stated in the Privacy Policy."
            />
          </div>
          <div className="captcha">
            
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
          </div>
          <button className="signup-btn">Sign Up</button>
          <div className="break">
            <div className="line"></div>
            <p>or continue with</p>
            <div className="line"></div>
          </div>
          {/* <div className="google">
            <FcGoogle style={{ marginRight: 10, width: 25, height: 25 }} />
            <GoogleLogin
              clientId="979909697763-pe6gr2hbnarqpvdj31fh3ak86gfacg7a.apps.googleusercontent.com"
              render={(el) => <button onClick={el.onClick}>Google</button>}
              buttonText="Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div> */}
          <div className="social">
            <div className="buttons" variant="outlined">
              <FaApple
                style={{
                  color: "black",
                  marginRight: 5,
                  width: 20,
                  height: 20,
                }}
              />{" "}
              Apple
            </div>

            <div>
              <FaFacebook
                style={{ color: "blue", marginRight: 5, width: 23, height: 23 }}
              />
              Facebook
            </div>
          </div>
          <div className="line"></div>
          <div className="google al">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
          <p className="By">
            By signing in, I agree to Agoda's Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
