import React, { useState } from "react";
import styles from "../SignupStyling.module.css";
import classNames from "classnames";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../config/axiosinstance";
import { API_URLS } from "../../../utils/API_URLS";

const PsychicLogin = ({ setIsSignup, setCurrentStep }) => {
  const [loading, setLoading] = useState(false);
  const loginAction = (data) => {
    const params = {
      ...data,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    setLoading(true);
    axiosInstance
      .post(API_URLS.clientLogin, params)
      .then((data) => {
        if (!data.status) {
          toast.error(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          setIsSignup(true);
          localStorage.setItem("token", data?.tokens?.access?.token);
          localStorage.setItem(
            "userTokenRefresh",
            data?.tokens?.refresh?.token
          );
          setLoading(false);
        }
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const togglePassword = (e) => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
    } else if (passwordType === "text") {
      setPasswordType("password");
    }
  };

  return (
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

      <div id="main" className="animate__animated animate__In container-fluid">
        <div className="row">
          <div className={classNames(styles.leftDiv, "col-sm-12 p-0")}>
            <div className={classNames(styles.formWrapper, "w-100")}>
              <div className={styles.formDiv}>
                <div className={styles.titleBox}>
                  <h1>Client Login</h1>
                </div>

                <form onSubmit={handleSubmit(loginAction)}>
                  <div className="row">
                    <div className="col">
                      <div className="form-floating mb-4">
                        <input
                          type="text"
                          autoComplete="off"
                          className={`${styles.greyInputBg} ${
                            errors.email && styles.invalid
                          } form-control`}
                          id="floatingInputEmail"
                          placeholder="Email Address"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          })}
                          onChange={(event) =>
                            setValue("email", event.target.value)
                          }
                        />
                        <label
                          htmlFor="floatingInputEmail"
                          className={styles.floatingLabel}
                        >
                          Email Address
                        </label>
                        {errors.email && (
                          <span className="invalid-feedback">
                            Please enter valid Email Address
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="mb-4">
                        <div
                          className={`input-group  ${
                            errors.password && styles.invalid
                          } rounded`}
                        >
                          <div className="form-floating">
                            <input
                              type={passwordType}
                              className={`${styles.greyInputBg} ${styles.RBorder} form-control`}
                              id="floatingInputPassword"
                              placeholder="Password"
                              autoComplete="off"
                              onChange={(event) =>
                                setValue("password", event.target.value)
                              }
                              {...register("password", {
                                required: true,
                                pattern: {
                                  value:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()_\-\+=:;"'?\/>.<,{}\[\]])[a-zA-Z\d~`!@#$%^&*()_\-\+=:;"'?\/>.<,{}\[\]]{8,}$/,
                                  message:
                                    "Password must be 8 characters and must contain atleast 1 small alphabet, 1 capital alphabet, 1 numeric value and 1 special character",
                                },
                                minLength: {
                                  value: 8,
                                  message:
                                    "password should contain minimum 8 charaters long",
                                },
                                maxLength: {
                                  value: 20,
                                  message:
                                    "password should contain maximum 20 charaters long",
                                },
                              })}
                            />
                            <label
                              htmlFor="floatingInputPassword"
                              className={styles.floatingLabel}
                            >
                              Password
                            </label>
                          </div>
                          <span
                            className={"input-group-text " + styles.eyeBg}
                            id="basic-addon2"
                            onClick={togglePassword}
                          >
                            {!showPassword ? (
                              <AiOutlineEyeInvisible
                                className={styles.eyeIcon}
                              />
                            ) : (
                              <AiOutlineEye className={styles.eyeIcon} />
                            )}
                          </span>
                        </div>
                        {errors.password && (
                          <span className="invalid-feedback">
                            {errors?.password?.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col d-grid gap-2">
                      <button
                        className="btn btn-dark btn-block signupBtn"
                        type="submit"
                      >
                        {loading ? (
                          <>
                            <span
                              className="spinner-border me-2 spinner-border-sm"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Logging In
                          </>
                        ) : (
                          "Login"
                        )}
                      </button>
                    </div>
                  </div>
                </form>

                <div className="row mt-2">
                  <div className={styles.loginDiv + " col"}>
                    <p className="d-flex gap-1 align-items-center">
                      Don’t have an account?{" "}
                      <a
                        onClick={() => setCurrentStep("basicDetails")}
                        className="btn-link "
                      >
                        Signup
                      </a>
                    </p>
                    {/* <p className={styles.forgotPasswordDeskTop}>
                        Forgot your password?{" "}
                        <a href="/auth/forgotpassword" className="btn-link">
                          Reset it
                        </a>
                      </p> */}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <p className={styles.copyright + " mt-4"}>
                      © 2023 Psychica. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PsychicLogin;
