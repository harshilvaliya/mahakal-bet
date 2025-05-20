import { useEffect, useState } from "react";
import { regUserApi } from "../api/register";
import { useLocation, useNavigate } from "react-router-dom";
import { commonError, fetchCheckUser, fetchGenOtp } from "../api/apiconfig";
import mahakalLogo from "../assets/mahakal-logo-white.png";

export const SignUp = () => {
  const params = new URLSearchParams(window.location.search);
  const siteData = useLocation();

  const referId = params.get("refer");
  const agent = params.get("agent");
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    rfcode: referId,
    cpassword: "",
    otp: "",
    password: "",
    mnum: "",
    promoplan: "1",
  });

  const [otpBox, setOtpBox] = useState(false);
  const [isUserAvailable, setIsUserAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpLoading, setIsOtpLoading] = useState(false);

  const onChange = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const checkUserName = async (name: any) => {
    if (name.length >= 4) {
      fetchCheckUser(name).then((data: any) => {
        if (data.status === "success") {
          setIsUserAvailable(true);
        } else {
          setIsUserAvailable(false);
        }
      });
    }
  };

  const geneRateOtp = async () => {
    if (loginData.mnum.length !== 10) {
      commonError("Please enter 10 digit mobile num.", "error");
    } else {
      setIsOtpLoading(true);
      fetchGenOtp(loginData.mnum)
        .then((data: any) => {
          setIsOtpLoading(false);
          if (data.status === "success") {
            setOtpBox(true);
          }
          commonError(data.message, data.status);
        })
        .catch(() => {
          setIsOtpLoading(false);
          commonError("Failed to generate OTP. Please try again.", "error");
        });
    }
  };

  const regNewUser = async () => {
    if (loginData.username.length < 3) {
      commonError("Please make your username of atleast 3 character", "error");
    } else if (loginData.password.length < 4) {
      commonError("Please make your password length atleast 4 digit", "error");
    } else if (loginData.otp.length !== 6) {
      commonError("Please Enter 6 digit OTP", "error");
    } else {
      setIsLoading(true);
      regUserApi(
        loginData.username,
        loginData.password,
        loginData.mnum,
        0,
        loginData.otp,
        referId,
        agent
      )
        .then((data) => {
          setIsLoading(false);
          if (data.status === "success") {
            navigate("/");
            navigate(0);
            commonError(data.message, data.status);
          } else {
            commonError(data.message, data.status);
          }
        })
        .catch(() => {
          setIsLoading(false);
          commonError("Registration failed. Please try again.", "error");
        });
    }
  };

  useEffect(() => {
    if (!referId) {
      commonError("Please get your SignUp Link From Your Agent", "error");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const a = setTimeout(() => {
      checkUserName(loginData.username);
    }, 1000);
    return () => {
      clearTimeout(a);
    };
  }, [loginData.username]);

  return (
    <div className="min-h-screen bg-secondary-200 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-8 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-lg">
        <img
          src={siteData.state.logo}
          alt={siteData.state.name}
          className="h-12 w-auto object-contain mb-2"
        />
        <h2 className="text-xl font-semibold text-white/90 tracking-wide">
          {siteData.state.name}
        </h2>
      </div>
      <div className="max-w-md w-full bg-secondary-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-secondary-700/50">
        <div className="flex justify-center">
          <a href="/">
            <img
              src={mahakalLogo}
              alt="Mahakal Logo"
              className="h-auto w-40 drop-shadow-lg invert-100"
            />
          </a>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-light">
          Register Now
        </h2>

        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md space-y-4">
            <div className="flex">
              <div className="relative flex-1">
                <label htmlFor="mnum" className="sr-only">
                  Mobile Number
                </label>
                <input
                  required
                  type="number"
                  id="mnum"
                  onChange={onChange}
                  name="mnum"
                  value={loginData.mnum}
                  placeholder="Mobile Number"
                  className="flex-1 appearance-none rounded-l-lg relative block w-full px-3 py-3 border border-secondary-700 bg-secondary-700/50 text-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent sm:text-sm transition-all duration-200"
                  maxLength={10}
                  disabled={otpBox || isOtpLoading}
                />
                {loginData.mnum &&
                  loginData.mnum.length > 0 &&
                  loginData.mnum.length !== 10 && (
                    <span className="absolute -bottom-5 left-0 text-xs text-red-500">
                      Enter 10 digit mobile number
                    </span>
                  )}
              </div>
              <button
                type="button"
                onClick={geneRateOtp}
                disabled={
                  loginData.mnum.length !== 10 || otpBox || isOtpLoading
                }
                className="inline-flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-r-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary-600"
              >
                {isOtpLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending
                  </>
                ) : (
                  "Get OTP"
                )}
              </button>
            </div>

            {otpBox && (
              <div className="space-y-5 mt-6 animate-fadeIn">
                <div className="relative">
                  <label
                    htmlFor="otp"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    OTP Verification
                  </label>
                  <input
                    required
                    type="text"
                    id="otp"
                    onChange={onChange}
                    name="otp"
                    value={loginData.otp}
                    placeholder="Enter 6-digit OTP"
                    className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-secondary-700 bg-secondary-700/50 text-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent sm:text-sm transition-all duration-200"
                    maxLength={6}
                    pattern="[0-9]{6}"
                  />
                  {loginData.otp &&
                    loginData.otp.length > 0 &&
                    loginData.otp.length !== 6 && (
                      <span className="absolute -bottom-5 left-0 text-xs text-red-500">
                        Enter 6 digit OTP code
                      </span>
                    )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      id="username"
                      onChange={onChange}
                      name="username"
                      value={loginData.username}
                      placeholder="Choose a username"
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-secondary-700 bg-secondary-700/50 text-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent sm:text-sm transition-all duration-200 pr-10"
                      minLength={4}
                      maxLength={14}
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <i className="fas fa-user text-gray-400" />
                    </span>
                  </div>

                  {loginData.username.length > 0 && (
                    <div className="mt-1">
                      {loginData.username.length < 4 ? (
                        <span className="text-xs text-red-500 flex items-center">
                          <i className="fas fa-exclamation-circle mr-1"></i>
                          Username must be at least 4 characters
                        </span>
                      ) : loginData.username.length > 14 ? (
                        <span className="text-xs text-red-500 flex items-center">
                          <i className="fas fa-exclamation-circle mr-1"></i>
                          Username must be less than 14 characters
                        </span>
                      ) : isUserAvailable ? (
                        <span className="text-xs text-green-500 flex items-center">
                          <i className="fas fa-check-circle mr-1"></i>
                          Username is available
                        </span>
                      ) : (
                        <span className="text-xs text-red-500 flex items-center">
                          <i className="fas fa-times-circle mr-1"></i>
                          Username is not available
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <label
                    htmlFor="password-field"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="password"
                      id="password-field"
                      onChange={onChange}
                      name="password"
                      value={loginData.password}
                      placeholder="Create a password"
                      className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-secondary-700 bg-secondary-700/50 text-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent sm:text-sm transition-all duration-200 pr-10"
                      minLength={4}
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <i className="fas fa-key text-gray-400" />
                    </span>
                  </div>
                  {loginData.password &&
                    loginData.password.length > 0 &&
                    loginData.password.length < 4 && (
                      <span className="text-xs text-red-500 flex items-center mt-1">
                        <i className="fas fa-exclamation-circle mr-1"></i>
                        Password must be at least 4 characters
                      </span>
                    )}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={regNewUser}
              disabled={
                isLoading ||
                !otpBox ||
                loginData.username.length < 4 ||
                loginData.password.length < 4 ||
                loginData.otp.length !== 6 ||
                !isUserAvailable
              }
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-light bg-primary-400 hover:bg-secondary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary-600/30"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                <>Sign Up</>
              )}
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-4">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-primary-600 hover:text-primary-500 transition-colors duration-200"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              className="text-primary-600 hover:text-primary-500 transition-colors duration-200"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      </div>
    </div>
  );
};
