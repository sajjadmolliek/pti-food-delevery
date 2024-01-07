import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link,} from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ExtraLogin from "../../Hooks/ExtraLogin/ExtraLogin";

const Login = () => {
  const [loginDesable, setLoginDesable] = useState(true);
  const [captchaLoad, setCaptchaLoad] = useState(true);
  const [wrong, setWrong] = useState(false);



  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleValidetCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setWrong(false);
      setCaptchaLoad(false);
      setLoginDesable(false);
    } else {
      setWrong(true);
      setCaptchaLoad(true);
      setLoginDesable(true);
    }
  };

  return (
    <>
      <div className="min-h-screen ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <div className="flex">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  {captchaLoad ? (
                    <RotatingLines
                      strokeColor="#1976D2"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="36"
                      visible={true}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <input
                  type="text"
                  onBlur={handleValidetCaptcha}
                  name="recaptcha"
                  placeholder="Type the text above"
                  className="input input-bordered"
                  required
                />
                {wrong ? (
                  <label className="label">
                    <span className="text-red-600">
                      Captcha Typing is Wrong Rewrite The Captcha
                    </span>
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="form-control mt-6">
                <AwesomeButton disabled={loginDesable} type="primary">
                  Login
                </AwesomeButton>
              </div>
            </form>
            <p className="text-center mb-10">
              <small>
                New here ? go to{" "}
                <Link
                  to={"/register"}
                  className="font-bold text-sm text-blue-600"
                >
                  Register
                </Link>
              </small>
            </p>
            <ExtraLogin/>
          </div>
       
      </div>
    </>
  );
};

export default Login;



