

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { signUp, sendOtp } from "@/services/authAPI";
import toast from "react-hot-toast";

export default function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user } = useSelector((store) => store.auth);



  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const { fullname, email, phonenumber, password, role, file } = user;

    

    dispatch(signUp(fullname, email, phonenumber, password, role, file, otp, navigate));
  };

  const handleResendOtp = () => {
    if (!user.email) {
      toast.error("No email found. Please sign up first.");
      navigate("/signup");
      return;
    }
    dispatch(sendOtp(user.email, navigate));
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="spinner"></div>
         
        </div>
      ) : (
        <div className="max-w-md p-6 bg-white rounded-md shadow-lg">
          <h1 className="text-2xl font-semibold text-center mb-4">Verify Email</h1>
          <p className="text-center text-gray-600 mb-6">
            A verification code has been sent to your email. Please enter the code below.
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              isInputSecure
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.18)",
                  }}
                  className="w-12 lg:w-14 border-b-2 border-gray-300 rounded-md text-center text-lg focus:border-blue-500"
                />
              )}
              containerStyle="flex justify-center space-x-2"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-6 hover:bg-blue-700 transition-colors"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/signUp">
              <p className="text-gray-500 flex items-center gap-x-2 hover:text-gray-700 transition-colors">
                <BiArrowBack /> Back to Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-500 gap-x-2 hover:text-blue-700 transition-colors"
              onClick={handleResendOtp}
            >
              <RxCountdownTimer />
              Resend OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
