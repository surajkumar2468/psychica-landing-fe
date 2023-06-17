import React from "react";
import axiosInstance from "../../../config/axiosinstance";
import { API_URLS } from "../../../utils/API_URLS";
import styles from "../SignupStyling.module.css";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";
import MaskedInput from "react-input-mask";
import moment from "moment";

const BasicDetails = ({ userData, setUserData, setCurrentStep }) => {
  const [startDate, setStartDate] = useState("");
  const [isEmailExist, setIsEmailExist] = useState(false);
  const {
    register,
    setValue,
    getValues,
    setError,
    trigger,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  const dobRef = useRef();

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    if (!isEmailExist) {
      trigger()
        .then((res) => {
          if (res) {
            /**
             * Sending Data as a query param to next page
             */
            const fieldData = getValues();
            const currentFormData = { ...fieldData };
            setUserData(currentFormData);
            document.getElementById("main").classList.add("animate__fadeOut");
            setTimeout(() => setCurrentStep("helpSelector"), 1000);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (startDate) {
      setValue(
        "dob",
        `${("0" + (startDate.getMonth() + 1)).slice(-2)}/${
          startDate.getDate() < 10
            ? "0" + startDate.getDate()
            : startDate.getDate()
        }/${startDate.getFullYear()}`,
        { shouldValidate: true }
      );
    }
  }, [startDate]);

  const openDatePicker = () => {
    dobRef.current.setOpen(true);
  };

  const onDateSelect = (date) => {
    setStartDate(date);
  };

  const verifyEmail = (value) => {
    axiosInstance
      .get(`${API_URLS.userCheckEmail}?email=${value}`)
      .then((res) => {
        setIsEmailExist(false);
        delete errors?.email;
      })
      .catch((err) => {
        if (err?.code === 400) {
          setIsEmailExist(true);
          setError("email", { message: err?.message });
        }
      });
  };

  const handleEmailVerification = (e) => {
    const value = e.target.value;
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      verifyEmail(value);
    }
  };
  return (
    <div id="main" className="animate__animated animate__In container-fluid">
      <div className="row">
        <div className={classNames(styles.leftDiv, "col-sm-12 p-0")}>
          <div className={classNames(styles.formWrapper, "w-100")}>
            <div className={styles.clientformDiv}>
              <div className={styles.titleBox}>
                <p className={classNames(styles.title, "mb-0")}>
                  Client signup
                </p>
                <p className={styles.desc}>
                  To get started, fill out the a below.
                </p>
              </div>
              <form>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        className={`${styles.greyInputBg} ${
                          errors.first_name && styles.invalid
                        } form-control`}
                        id="floatingInputFirstName"
                        placeholder="First Name"
                        {...register("first_name", {
                          required: {
                            value: true,
                            message: "This is required",
                          },
                          pattern: {
                            value: /^[a-zA-Z ]+$/,
                            message: "Only aphlabets are allowed",
                          },
                          maxLength: {
                            value: 20,
                            message:
                              "First name can only contain 20 characters",
                          },
                        })}
                      />
                      <label
                        htmlFor="floatingInputFirstName"
                        className={styles.floatingLabel}
                      >
                        First Name
                      </label>
                      {errors.first_name && (
                        <span className="invalid-feedback">
                          {errors?.first_name?.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        className={`${styles.greyInputBg} ${
                          errors.last_name && styles.invalid
                        } form-control`}
                        id="floatingInputLastName"
                        placeholder="Last Name"
                        {...register("last_name", {
                          required: {
                            value: true,
                            message: "This is required",
                          },
                          pattern: {
                            value: /^[a-zA-Z ]+$/,
                            message: "Only aphlabets are allowed",
                          },
                          maxLength: {
                            value: 20,
                            message: "Last name can only contain 20 characters",
                          },
                        })}
                      />
                      <label
                        htmlFor="floatingInputLastName"
                        className={styles.floatingLabel}
                      >
                        Last Name
                      </label>
                      {errors.last_name && (
                        <span className="invalid-feedback">
                          {errors?.last_name?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-4">
                      <div className="input-group mb-3">
                        <DatePicker
                          ref={dobRef}
                          popperClassName="custom-calenderPopper-login"
                          calendarClassName="custom-professionalDatePicker-login"
                          maxDate={new Date().setFullYear(
                            new Date().getFullYear() - 18
                          )}
                          minDate={new Date().setFullYear(
                            new Date().getFullYear() - 103
                          )}
                          className={styles.datePicker}
                          selected={startDate}
                          scrollableYearDropdown
                          showYearDropdown={true}
                          showMonthDropdown={true}
                          yearDropdownItemNumber={150}
                          dateFormatCalendar="MMMM"
                          onChange={(date) => onDateSelect(date)}
                        />
                        <div className="form-floating">
                          <MaskedInput
                            mask="99/99/9999"
                            alwaysShowMask
                            type="text"
                            onFocus={openDatePicker}
                            className={`${styles.greyInputBg} fw-bolder ${
                              errors.dob && styles.invalid
                            } form-control`}
                            id="floatingInputDob"
                            placeholder="Date Of Birth"
                            maskChar={null}
                            onChange={(event) =>
                              setValue("dob", event.target.value)
                            }
                            {...register("dob", {
                              required: {
                                value: true,
                                message: "This is a required field",
                              },

                              validate: {
                                isValidDate: (value) =>
                                  moment(value).isValid() ||
                                  "Please enter a valid date",
                                isDateMore: (value) => {
                                  if (moment(value).isValid()) {
                                    const minimumYear = moment().subtract(
                                      18,
                                      "years"
                                    );
                                    const maximumYear = moment().subtract(
                                      103,
                                      "years"
                                    );
                                    const givenYear = moment(value);

                                    if (minimumYear.diff(givenYear) < 0) {
                                      return "Your age must be 18 years old";
                                    }
                                    if (givenYear.diff(maximumYear) < 0) {
                                      return "Your age must be 103 years old";
                                    }
                                  }
                                  return true;
                                },
                              },
                            })}
                            disableUnderline
                          />
                          <label
                            htmlFor="floatingInputDob"
                            className={styles.floatingLabel}
                          >
                            Date of Birth
                          </label>
                        </div>
                        <button
                          className={`${
                            errors.dob && styles.invalid
                          } btn btn-outline-secondary ${styles.RLBorder}`}
                          onClick={openDatePicker}
                          type="button"
                          id="button-addon1"
                        >
                          <img
                            alt="c-icon"
                            width={100}
                            height={100}
                            src={"/images/calendar-signup.svg"}
                            className={styles.calenderIcon}
                          />
                        </button>
                        {errors.dob && (
                          <span className="invalid-feedback">
                            {errors?.dob?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        className={`${styles.greyInputBg} ${
                          errors.email && styles.invalid
                        } form-control`}
                        id="floatingInputEmail"
                        placeholder="Email Address"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "This is required",
                          },
                          onChange: handleEmailVerification,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Please enter valid Email Address",
                          },
                        })}
                      />
                      <label
                        htmlFor="floatingInputEmail"
                        className={styles.floatingLabel}
                      >
                        Email Address
                      </label>
                      {errors.email && (
                        <span className="invalid-feedback">
                          {errors?.email?.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-4">
                      <input
                        type="number"
                        className={`${styles.greyInputBg} ${
                          errors.pincode && styles.invalid
                        } form-control`}
                        id="floatingInputPhone"
                        placeholder="Zip Code"
                        onInput={(e) =>
                          (e.target.value =
                            e.target.value.match(/^([0-9]{0,7})/)[0])
                        }
                        {...register("pincode", { required: true })}
                      />
                      <label
                        htmlFor="floatingInputPhone"
                        className={styles.floatingLabel}
                      >
                        Zip Code
                      </label>
                      {errors.pincode && (
                        <span className="invalid-feedback">
                          This is required.
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-floating mb-3">
                      <select
                        {...register("gender", {
                          required: true,
                          validate: (value) => {
                            return (
                              value !== "Select Gender" ||
                              "This is A Required Field"
                            );
                          },
                        })}
                        className={classNames(
                          "form-select fw-bolder",
                          errors.gender && styles.invalid,
                          styles.greyInputBg
                        )}
                        aria-label="Default select example"
                      >
                        <option defaultValue hidden>
                          Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <label
                        htmlFor="floatingInputGen"
                        className={styles.floatingLabel}
                      >
                        Gender
                      </label>
                      {errors.gender && (
                        <span className="invalid-feedback">
                          This is required.
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className={classNames(
                    styles.SignUpButtonContainer,
                    "row mt-3"
                  )}
                >
                  <div
                    className={classNames(
                      styles.SignUpButtonWrapper,
                      "col d-grid gap-2"
                    )}
                  >
                    <button
                      onClick={onSubmitHandeler}
                      className={classNames(
                        "btn btn-dark btn-block signupBtn rounded-2"
                      )}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className={styles.loginDiv + " col"}>
                  <p className="d-flex gap-1 align-items-center">
                    Already have an account?{" "}
                    <a
                      onClick={() => setCurrentStep("login")}
                      className="btn-link"
                    >
                      Login
                    </a>
                  </p>
                  <p className={styles.copyright + " mt-2"}>
                    © 2023 Psychica. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default BasicDetails;
