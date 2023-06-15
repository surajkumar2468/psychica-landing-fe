import React, { useEffect, useState } from "react";
import BasicDetails from "../../components/scheduleappointment/BasicDetails";
import InitialSignup from "../../components/scheduleappointment/InitialSignup";
import HelpSelect from "../../components/scheduleappointment/HelpSelect";
import Password from "../../components/scheduleappointment/Password";
import PrivacyPolicy from "../../components/scheduleappointment/PrivacyPolicy";
import Payment from "../../components/payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentProfile from "../../components/paymentprofile";
import { useLocation } from "react-router-dom";
import { getQueryParamsAsObject } from "../../utils/common";
import axiosInstance from "../../config/axiosinstance";
import { API_URLS } from "../../utils/API_URLS";

const signUpFlow = {
  initialSignup: InitialSignup,
  basicDetails: BasicDetails,
  helpSelector: HelpSelect,
  password: Password,
  privacypolicy: PrivacyPolicy,
};
const ScheduleAppointment = () => {
  const [currentStep, setCurrentStep] = useState("basicDetails");
  const Component = signUpFlow[currentStep];
  const [isSignup, setIsSignup] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useLocation();
  const [profRateInfo, setPaymentRefInfo] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsSignup(true);
    } else {
      setIsSignup(false);
    }
  }, []);

  const { slotId } = getQueryParamsAsObject(router.search);
  const stripePromise = loadStripe(
    "pk_test_51N84kvHWAI8GoBYTYA1M4n0YT8vOEePPt1Y2yjsh0NVrOKyCygcH3KldNLpTLbZ9f2h7lkRHdAYnJg6ceWl9aPd3004lhBUOsw"
  );

  const getProfRateInfo = async () => {
    await axiosInstance
      .get(`${API_URLS.walletScheduleDetail}/${slotId}`)
      .then((res) => {
        setPaymentRefInfo(res);
      });
  };

  useEffect(() => {
    if (slotId) {
      getProfRateInfo();
    }
  }, [slotId]);

  return (
    <div className="home_sec1 row">
      <div className="w-50">
        {isSignup ? (
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        ) : (
          <Component
            setIsSignup={setIsSignup}
            userData={userData}
            setUserData={setUserData}
            setCurrentStep={setCurrentStep}
          />
        )}
      </div>
      <div className="w-50 p-5">
        <PaymentProfile profRateInfo={profRateInfo} />
      </div>
    </div>
  );
};

export default ScheduleAppointment;
