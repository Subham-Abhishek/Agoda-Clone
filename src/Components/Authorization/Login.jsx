import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Auth-page.css";
import { Loading } from "./Loading";
import GoogleLogin from "react-google-login";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { Redirect } from "react-router-dom";
import IsAuth from "../../context/Auth";
import { FcGoogle } from "react-icons/fc";
import { Navbar } from "../Landing/Navbar/Navbar";
import { Footer } from "../Landing/Footer/Footer";
import { useRef } from "react";

export const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const Auth = useContext(IsAuth);
  const googl = useRef();
  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
          <Typography>Sign in</Typography>
          <div className="mode-switch">
            <div className="auth-active">EMAIL</div>
            <div className="auth-disabled">MOBILE</div>
          </div>

          <div className="inputs">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input type="password" placeholder="First Name" />
          </div>

          <div className="confirm" style={{ marginTop: 20 }}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Email me exclusive Agoda promotions.  I can opt out later as stated in the Privacy Policy."
            />
          </div>

          <button className="signup-btn">Sign Up</button>
          <div className="break">
            <div className="line"></div>
            <p>or sign in with</p>
            <div className="line"></div>
          </div>
          <div className="google">
            <FcGoogle style={{ marginRight: 10, width: 25, height: 25 }} />
            <GoogleLogin
              style={{ height: 20 }}
              ref={googl}
              clientId="979909697763-pe6gr2hbnarqpvdj31fh3ak86gfacg7a.apps.googleusercontent.com"
              render={(el) => <button onClick={el.onClick}>Google</button>}
              buttonText="Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          <div className="social">
            <div>
              <FaApple
                style={{
                  marginRight: 5,
                  color: "black",
                  width: 20,
                  height: 20,
                }}
              />{" "}
              Apple
            </div>

            <div>
              <SiFacebook
                style={{ marginRight: 5, color: "blue", width: 22, height: 22 }}
              />{" "}
              Facebook
            </div>
          </div>
          <div className="line1"></div>

          <p className="By">
            By signing in, I agree to Agoda's Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};
