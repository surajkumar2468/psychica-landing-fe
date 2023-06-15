import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import styles from "./payment.module.css";
import axiosInstance from "../../config/axiosinstance";
import { API_URLS } from "../../utils/API_URLS";
import { useRef, useState } from "react";
import classNames from "classnames";
import Back from "../../Resources/icons/Back";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { getQueryParamsAsObject } from "../../utils/common";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

export default function Payment({
  getWalletDetails,
  walletDetails,
  selectedCard,
  setHelper,
  amount,
  profRateInfo,
  from,
  amountValueCheck,
  setAmount,
}) {
  const stripe = useStripe();
  const router = useLocation();
  const [Name, setName] = useState("");
  const expDate = useRef("");
  const Number = useRef("");
  const cvv = useRef("");
  const [isSavedCard, setIsSavedCard] = useState(false);
  //   console.log(router.search);
  const {
    id,
    type,
    price,
    appointment_type,
    schedule_type,
    picture,
    slotId,
    setAmountValue,
    name,
    duration,
    priceId,
    start_time,
  } = getQueryParamsAsObject(router.search);
  const elements = useElements();
  const [loader, SetLoader] = useState(false);
  const [validation, setValidation] = useState({
    cardNumber: false,
    cardHolder: false,
    cardExpiredate: false,
    cardCVC: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardNumberElement);

    if (
      validation?.cardCVC &&
      validation.cardExpiredate &&
      validation.cardHolder &&
      validation.cardNumber
    ) {
      SetLoader(true);
      amount < 10 && SetLoader(false);
      const result = await stripe.createToken(card);

      if (result.error) {
        // Show error to your customer.
      } else {
        const params = {
          meeting_type: appointment_type,
          category: type,
          slotId: slotId,
          desc: "Added to wallet",
          save_card: isSavedCard,
          card_id: result?.token?.card?.id,
          token: result?.token?.id,
        };
        axiosInstance.post(API_URLS.createSchedules, params).then((res) => {
          SetLoader(false);
          SetLoader(false);
          elements?.getElement(CardNumberElement).clear();
          elements?.getElement(CardExpiryElement).clear();
          elements?.getElement(CardCvcElement).clear();
          setName("");
          if (from === "settings-wallet") {
            setAmount("");
            setHelper("");
            setAmountValue(false);
          }
          window.open(
            `http://localhost:3001/client/appointment-successful?id=${
              res?.id
            }&total_amount=${
              res?.amount_paid
            }&type=${type}&schedule_type=${schedule_type}&picture=${picture}&appointment_type=${appointment_type}&duration=${duration}&name=${name}&date=${start_time}&token=${localStorage.getItem(
              "token"
            )}&refreshToken=${localStorage.getItem("userTokenRefresh")}`,
            "_blank"
          );
        });
      }
    } else {
      toast.error("Please fill all the required fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleCardNumberChange = (event) => {
    if (event.empty) {
      setValidation({ ...validation, cardNumber: false });
    }
    if (event.complete) {
      setValidation({ ...validation, cardNumber: true });
    } else if (event.error) {
      setValidation({ ...validation, cardNumber: false });
    }
  };

  const handleCardExpireDate = (event) => {
    if (event.empty) {
      setValidation({ ...validation, cardExpiredate: false });
    }
    if (event.complete) {
      setValidation({ ...validation, cardExpiredate: true });
    }
  };

  const handleCardCVC = (event) => {
    if (event.empty) {
      setValidation({ ...validation, cardCVC: false });
    }
    if (event.complete) {
      setValidation({ ...validation, cardCVC: true });
    }
  };
  return (
    <div id="main" className="animate__animated animate__In container-fluid">
      <div className="row">
        <div className={classNames(styles.leftDiv, "col-sm-12 p-0")}>
          <div className={classNames(styles.formWrapper, "w-100")}>
            <div>
              {/* <div
                // onClick={() => router.back(-1)}
                className={"cursor-pointer " + styles.backHeader}
              >
                <Back /> &nbsp;Back to Set Appointment
              </div> */}

              <div className={"d-flex " + styles.paymentWrapper}>
                <div className={"w-100 " + styles.leftContainer}>
                  <h1 className={styles.pageHeading}>Confirm and pay</h1>
                  <hr className={styles.line} />
                  <div className={styles.clientformDiv}>
                    <>
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                      />
                      <form
                        className={styles.paymentForm}
                        onSubmit={handleSubmit}
                      >
                        <label className={styles.formLabel}>
                          Card Number
                          <CardNumberElement
                            required
                            name="cardNumber"
                            options={{
                              disabled:
                                !amountValueCheck && from === "settings-wallet",
                            }}
                            onReady={(element) => (Number.current = element)}
                            onChange={handleCardNumberChange}
                            className={`${styles.inputField} ${
                              validation.cardNumber && styles.valid
                            } ${styles.inputField}`}
                          />
                        </label>
                        <label className={styles.formLabel}>
                          Card Holder
                          <input
                            disabled={
                              !amountValueCheck && from === "settings-wallet"
                            }
                            name="name"
                            value={Name}
                            onChange={(e) => {
                              setValidation({
                                ...validation,
                                cardHolder: e.target.value ? true : false,
                              });
                              setName(e.target.value);
                            }}
                            className={`${
                              !amountValueCheck && from === "settings-wallet"
                                ? styles.disabledField
                                : styles.normalField
                            }
              ${styles.inputNameField} ${
                              validation.cardHolder && styles.valid
                            } ${styles.inputNameField}`}
                            placeholder="Jone Doe"
                            type="text"
                            required
                          />
                        </label>

                        <div className={styles.expirationCvc}>
                          <label className={styles.formLabel}>
                            Expiration date
                            <CardExpiryElement
                              options={{
                                disabled:
                                  !amountValueCheck &&
                                  from === "settings-wallet",
                              }}
                              className={classNames(
                                `${validation.cardExpiredate && styles.valid} ${
                                  styles.inputField
                                }`,
                                styles.inputField
                              )}
                              onReady={(element) => (expDate.current = element)}
                              onChange={handleCardExpireDate}
                            />
                          </label>
                          <label className={styles.formLabel}>
                            CVC
                            <CardCvcElement
                              options={{
                                disabled:
                                  !amountValueCheck &&
                                  from === "settings-wallet",
                              }}
                              className={classNames(
                                `${validation.cardCVC && styles.valid} ${
                                  styles.inputField
                                }`,
                                styles.inputField
                              )}
                              onReady={(element) => (cvv.current = element)}
                              onChange={handleCardCVC}
                            />
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={(!stripe && !selectedCard) || loader}
                          className={styles.payBtn}
                        >
                          {loader ? (
                            <>
                              <span
                                className="spinner-border me-2 spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Paying
                            </>
                          ) : (
                            <>Pay</>
                          )}
                        </button>
                      </form>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
