import styles from "../SignupStyling.module.css";
import { useForm } from "react-hook-form";
import React, { useRef, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {
  checkPasswordStrength,
  generatePassword,
} from "../../../utils/password";
import classNames from "classnames";

const strengthName = [
  "Very Weak",
  "Weak",
  "Fairly Strong",
  "Strong",
  "Very Strong",
];

const Password = ({ userData, setUserData, setCurrentStep }) => {
  const buttonNextRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passWordStrength, setpasswordStrength] = useState(0);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const togglePassword = (e) => {
    setShowPassword(!showPassword);
    if (passwordType === "password") {
      setPasswordType("text");
    } else if (passwordType === "text") {
      setPasswordType("password");
    }
  };
  const toggleConfirmPassword = (e) => {
    setShowConfirmPassword(!showConfirmPassword);
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else if (confirmPasswordType === "text") {
      setConfirmPasswordType("password");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.tagName !== "INPUT") {
        buttonNextRef.current.click();
      }
    }
  };

  const {
    register,
    setValue,
    watch,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    trigger()
      .then((res) => {
        if (res) {
          const fieldData = getValues();

          const currentFormData = {
            ...userData,
            password: fieldData.password,
          };
          setUserData(currentFormData);
          document.getElementById("main").classList.add("animate__fadeOut");
          setTimeout(() => setCurrentStep("privacypolicy"), 1000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main
        id="main"
        className={classNames(styles.main, "animate__animated animate__In")}
      >
        <div className="container-fluid">
          <hr className={classNames(styles.hrLine, "m-0")} />
          <div className="row">
            <div className={classNames(styles.leftDiv, "col-sm-12 p-0")}>
              <div className={classNames(styles.formWrapper, "w-100")}>
                <div className={styles.formDiv + " h-100"}>
                  <div className={styles.titleBox}>
                    <p className={classNames(styles.title, "mb-0")}>
                      Create a password
                    </p>
                    <p className={classNames(styles.desc)}>
                      We want to make sure your account is secure. You can
                      create your own password or we can generate one for you.
                    </p>
                  </div>

                  <form className={classNames(styles.formtag)}>
                    <>
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
                                  onKeyDown={handleKeyDown}
                                  {...register("password", {
                                    required: {
                                      value: true,
                                      message: "This is a Required Field",
                                    },
                                    onChange: (e) => {
                                      const passwordStrengthValue =
                                        checkPasswordStrength(e.target.value);
                                      setpasswordStrength(
                                        passwordStrengthValue
                                      );
                                    },
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
                            {errors?.password && (
                              <span className="invalid-feedback">
                                {errors?.password?.message}
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
                                  type={confirmPasswordType}
                                  onKeyDown={handleKeyDown}
                                  className={`${styles.greyInputBg} ${styles.RBorder} form-control`}
                                  id="floatingInputPassword"
                                  placeholder="Confirm Password"
                                  {...register("confirmPassword", {
                                    required: {
                                      value: true,
                                      message: "This is a Required Field",
                                    },
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
                                    validate: (value) =>
                                      value === watch("password") ||
                                      "Passwords do not match.",
                                  })}
                                />
                                <label
                                  htmlFor="floatingInputPassword"
                                  className={styles.floatingLabel}
                                >
                                  Confirm Password
                                </label>
                              </div>
                              <span
                                className={"input-group-text " + styles.eyeBg}
                                id="basic-addon2"
                                onClick={toggleConfirmPassword}
                              >
                                {!showConfirmPassword ? (
                                  <AiOutlineEyeInvisible
                                    className={styles.eyeIcon}
                                  />
                                ) : (
                                  <AiOutlineEye className={styles.eyeIcon} />
                                )}
                              </span>
                            </div>
                            {errors?.confirmPassword && (
                              <span className="invalid-feedback">
                                {errors?.confirmPassword?.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className={classNames(
                            styles.passWordStrengthTiitle,
                            "fw-bolder"
                          )}
                        >
                          {" "}
                          Password Strength{" "}
                        </div>
                        <div className="d-flex align-items-center w-100">
                          <div
                            className={classNames(
                              styles.customProgressStylng,
                              "progress"
                            )}
                          >
                            <div
                              className={classNames(
                                styles.customProgressBarStylng,
                                "progress-bar"
                              )}
                              role="progressbar"
                              style={{
                                width: `${(passWordStrength / 5) * 100}%`,
                              }}
                              aria-valuenow={(passWordStrength / 5) * 100}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>

                          <div
                            className={classNames(
                              styles.passWordStrength,
                              "ml-auto mb-2"
                            )}
                          >
                            {strengthName[passWordStrength - 1]}
                          </div>
                        </div>
                      </div>
                      <div
                        className={classNames(
                          styles.SignUpButtonContainer,
                          "row mt-5"
                        )}
                      >
                        <div className="col d-grid gap-2">
                          <button
                            tabIndex="0"
                            ref={buttonNextRef}
                            onClick={onSubmitHandeler}
                            className="btn mt-2 btn-dark btn-block signupBtn rounded-2"
                          >
                            Next
                          </button>
                          <button
                            tabIndex="1"
                            onClick={(event) => {
                              event.preventDefault();
                              const passwordData = generatePassword();
                              const passwordStrengthValue =
                                checkPasswordStrength(passwordData);
                              setpasswordStrength(passwordStrengthValue);
                              setValue("password", passwordData, {
                                shouldValidate: true,
                              });
                              setValue("confirmPassword", passwordData, {
                                shouldValidate: true,
                              });
                            }}
                            className="btn secondary-cstm-btn btn-block signupBtn rounded-2"
                          >
                            Generate Password
                          </button>
                        </div>
                      </div>
                    </>

                    <div className={styles.copyright}>
                      © 2023 Psychica. All rights reserved.
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Password;
